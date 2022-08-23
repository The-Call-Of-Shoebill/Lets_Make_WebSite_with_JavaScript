import BlogPost from '../components/Blog/BlogPost'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const Home = ({ blogs }) => {
  const realData = blogs.data.map((item) => {
    const mv_exist = item.attributes.main_visual.data
    const mv_url   = mv_exist === null ? "" : String(process.env.graphQL_Server_Root).replace(/\/$/, '') + item.attributes.main_visual.data.attributes.formats.large.url

      return {
        id: item.id,
        title: item.attributes.title,
        date: item.attributes.date,
        description: item.attributes.description,
        url: '/posts/' + item.attributes.url,
        main_visual: mv_url
      }
  })

  return (
    <section id="index">
      <div className="container">
        {realData.map((item) => (
          <BlogPost
            key = {item.id}
            title = {item.title}
            date  ={item.date}
            description = {item.description}
            url = {item.url}
            main_visual = {item.main_visual} />
        ))}
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const client = new ApolloClient ({
    uri: process.env.graphQL_Server,
    cache: new InMemoryCache()
  })

  const { data } = await client.query ({
    query: gql `
      query getBlogs {
        blogs {
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
  })

  return {
    props: {
      blogs: data.blogs
    }
  }
}


export default Home;