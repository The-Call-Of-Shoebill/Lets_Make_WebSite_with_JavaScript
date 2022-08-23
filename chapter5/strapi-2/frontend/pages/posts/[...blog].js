import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const deleteEmptyElement = (_array) => {
  return _array.filter(v => v)
}

const GET_BLOGS = gql `
  query getBlogs ($current_url: String) {
    blogs (filters: { url: { eq: $current_url } }) {
      data {
        id
        attributes {
          title
          description
          date
          body
          url
          img {
            data {
              attributes {
                name
                alternativeText
                formats
              }
            }
          }
          main_visual {
            data {
              attributes {
                name
                alternativeText
                formats
              }
            }
          }
        }
      }
    }
  }
`

const Blog = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
      </Head>

      <div id="blog">
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
        <p className="contents">{props.body}</p>
        <figure><img src={props.main_visual} /></figure>
        <Link href="/"><a className="blogLink">Back To Home</a></Link>
      </div>
    </>
  )
}

export const getStaticProps = async (paths) => {
  const current = paths.params.blog.join('/')

  const client = new ApolloClient ({
    uri: process.env.graphQL_Server,
    cache: new InMemoryCache()
  })

  const { data } = await client.query ({
    query: GET_BLOGS,
    variables: { current_url: current }
  })

  const returnData = data.blogs.data.map((item) => {
    const mv_exist = item.attributes.main_visual.data
    const mv_url   = mv_exist === null ? "" : String(process.env.graphQL_Server_Root).replace(/\/$/, '') + item.attributes.main_visual.data.attributes.formats.large.url

    return {
      title: item.attributes.title,
      description: item.attributes.description,
      body: item.attributes.body,
      main_visual: mv_url,
      paths: deleteEmptyElement(String(item.attributes.url).split('/'))
    }
  })

  let obj = {}
  returnData.forEach(function(e){
    obj = e
  })

  return {
    props: obj
  }
}

export const getStaticPaths = async () => {
  // index.jsにおける戻り値のプロパティ値が、このファイル名と連動している
  //
  // ファイル名が[...blog].jsの時には、paramsの値はblog（ファイル名/関数名と同一）のみ返される
  const client = new ApolloClient ({
    uri: process.env.graphQL_Server,
    cache: new InMemoryCache()
  })

  const { data } = await client.query ({
    query: GET_BLOGS
  })

  const returnData = data.blogs.data.map((item) => {
    return {
      paths: deleteEmptyElement(String(item.attributes.url).split('/'))
    }
  })

  return {
    paths: returnData.map((dst) => {
      return {
        params: {
          blog: dst.paths
        }
      }
    }),
    fallback: false
  }
}

export default Blog
