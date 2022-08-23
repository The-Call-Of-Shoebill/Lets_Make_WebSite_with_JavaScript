import React from 'react'
import Link from 'next/link'

const BlogPost = ( blogItem ) => {
  return (
    <div key={blogItem.id} className="blogItem">
      <img src={blogItem.main_visual} />
      <p className="date">{blogItem.date}</p>
      <Link href={blogItem.url}>
        <a className="title">{blogItem.title}</a>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: blogItem.description }} />
    </div>
  )
}

export default BlogPost
