import matter from 'gray-matter'
import BlogPost from '../components/Blog/BlogPost'
import getMarkdownData from '../lib/getMarkdownData'

const Home = (props) => {
  const realData = props.data.map((item) => {
    return { data: matter(item.data).data, blog: item.blog, link: item.link }
  })

  return (
    <section id="index">
      <div className="container">
        {realData.map((item, i) => (
          <BlogPost key={i} blogItem={item.data} linkURL={item.link} />
        ))}
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const allMarkdownData = getMarkdownData().paths

  const data = []
  allMarkdownData.map((item) => {
    data.push(item.params)
  })

  return {
    props: {
      data
    }
  } 
}

export default Home;