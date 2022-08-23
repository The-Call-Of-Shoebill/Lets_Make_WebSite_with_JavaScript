import React from 'react'
import Link from 'next/link'

const BlogPost = ({ blogItem, linkURL }) => {
  return (
    <div className="blogItem">
      <img src={blogItem.img} />
      <p className="date">{blogItem.date}</p>
      <Link href={linkURL}>
        <a className="title">{blogItem.title}</a>
      </Link>
      <p>{blogItem.description}</p>
    </div>
  )
}

export default BlogPost
