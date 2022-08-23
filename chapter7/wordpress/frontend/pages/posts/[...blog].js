import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import sanitizeHtml from 'sanitize-html'

const deleteEmptyElement = (_array) => {
	return _array.filter(v => v)
}

const returnPostURL = (url) => {
	const retURL = url.replace( 'http://10.10.10.173/appendix/wordpress/index.php', '' )
	return retURL
}

const removeHTMLtag = (html) => {
	const clean = sanitizeHtml(html, {
		allowedTags: [],
		allowedAttributes: {}
	})

	return clean
}

const sanitizeHTML = (html) => {
	const clean = sanitizeHtml(html, {
		allowedTags: false,
		allowedAttributes: false
	})

	return clean
}

const Blog = (props) => {
	return (
		<>
			<Head>
				<title>{props.data.title.rendered}</title>
				<meta name="description" content={removeHTMLtag(props.data.excerpt.rendered)} />
				<meta property="og:title" content={props.data.title.rendered} />
				<meta property="og:description" content={removeHTMLtag(props.data.excerpt.rendered)} />
			</Head>

			<div id="blog">
				<h1>{props.data.title.rendered}</h1>
				<div className="contents" dangerouslySetInnerHTML={{ __html: sanitizeHTML(props.data.content.rendered)}} />
				<Link href="/"><a className="blogLink">Back To Home</a></Link>
			</div>
		</>
	)
}

export const getStaticProps = async (paths) => {
	const current = 'http://10.10.10.173/appendix/wordpress/index.php/' + paths.params.blog.join('/') + '/'

	try {
		const res = await axios.get('http://10.10.10.173/appendix/wordpress/index.php/wp-json/wp/v2/posts')
		const returnData = res.data.find(value => value.link == current)

		return {
			props: {
				data: returnData
			}
		}
	} catch (err) {
		console.log(err)
	}
}

export const getStaticPaths = async () => {
	try {
		const res = await axios.get('http://10.10.10.173/appendix/wordpress/index.php/wp-json/wp/v2/posts')
		const returnData = res.data

		return {
			paths: returnData.map(item => {
				return {
					params: {
						blog: deleteEmptyElement(returnPostURL(item.link).split('/'))
					}
				}
			}),
			fallback: false
		}
	} catch (err) {
		console.log(err)
	}
}

export default Blog
