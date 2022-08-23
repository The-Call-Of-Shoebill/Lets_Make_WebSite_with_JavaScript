import React from 'react'
import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import getMarkdownData from '../../lib/getMarkdownData'

const Blog = (props) => {
  const { data, content } = matter(props.content)
  return (
    <>
      <div id="blog">
        <h1>{data.title}</h1>
        <h3>{data.description}</h3>
        <ReactMarkdown>{content}</ReactMarkdown>
        <Link href="/"><a className="blogLink">Back To Home</a></Link>
      </div>
    </>
  )
}

export const getStaticProps = async (paths) => {
  const fs = require('fs');
  const blog = paths.params.blog.join('/');
  const content = await fs.readFileSync(process.env.pathDirectory + '/' + blog + '.md', 'utf8');

  return {
    props: {
      content
    }
  }
}

export const getStaticPaths = async () => {
	// index.jsにおける戻り値のプロパティ値が、このファイル名と連動している
	//
	// ファイル名が[...blog].jsの時には、paramsの値はblogのみ返される
	return await getMarkdownData()
}

export default Blog
