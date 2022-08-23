import BlogPost from '../components/Blog/BlogPost'
import axios from 'axios'

const returnPostURL = (url) => {
	const retURL = url.replace( 'http://10.10.10.173/appendix/wordpress/index.php', '/posts' )
	return retURL
}

const Home = (props) => {
	return (
		<section id="index">
			<div className="container">
				{props.data.map((post) => (
					<BlogPost
						key = {post.id}
						title = {post.title.rendered}
						date = {post.date}
						description = {post.excerpt.rendered}
						url = {returnPostURL(post.link)}
					/>
				))}
			</div>
		</section>
	)
}

export const getStaticProps = async () => {
	try {
		const res = await axios.get('http://10.10.10.173/appendix/wordpress/index.php/wp-json/wp/v2/posts')
		const data = res.data

		return {
			props: {
				data: data
			}
		}
	} catch (err) {
		console.log(err)
	}
}

export default Home;