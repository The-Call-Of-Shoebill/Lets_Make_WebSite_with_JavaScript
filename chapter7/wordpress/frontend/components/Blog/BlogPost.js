import React from 'react'
import Link from 'next/link'

const BlogPost = ( blogItem ) => {
  return (
    <div key={blogItem.id} className="blogItem">
      <p className="date">{blogItem.date}</p>
      <Link href={blogItem.url}>
        <a className="title">{blogItem.title}</a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: blogItem.description }} />
    </div>
  )
}

export default BlogPost
