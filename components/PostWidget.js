
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPost, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPost(result))
    } else {
      getRecentPost()
        .then((result) => setRelatedPost(result))
    }
  }, [slug])
  console.log(relatedPost)

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 space-y-4'>
      <h1 className="text-2xl mb-8 font-bold border-b pb-4 text-black ">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h1>
      {relatedPost.map((post) => (
        <div key={post.title} className='flex items-center w-full space-x-2 '>
          <div className="w-16 flex-none  ">
            <img
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-lg'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-700 text-sm'>{moment(post.createdAt).format('MMMM DD,YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={post.title} >
              <span className='text-black cursor-pointer border-b font-semibold'>{post.title}</span>
            </Link>



          </div>

        </div>
      ))}

    </div>
  )
}

export default PostWidget