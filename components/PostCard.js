import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounde-lg p-0 lg:p-8 pb-12 mb-8 text-black rounded-md'>
      <div className="relative overflow-hidden shadow md pb-30 mb-6">
        <Image src={post.featuredImage.url} alt={post.title}
        height={550}
        width={1000}
        className='object-cover'

        />
      </div>
      <h1 className='transition duration-250 text-center mb-5 cursor-pointer
       hover:text-pink-500 text-gray-900 text-3xl font-bold font-serif'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='flex flex-col space-y-3 text-center items-center justify-center'>
        <p className='text-center text-md text-gray-600 px-2 py-3 '>{post.excerpt}</p>
        <div className='lg:justify-between lg:flex w-full text-center '>
          <div className=" text-gray-600 font-serif font-semibold">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {moment(post.createdAt).format('MMMM DD,YYYY')}</span>
          </div>
          <div className="flex  items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 mt-5 lg:mt-0">
            <Image
              alt={post.author.name}
              height='30px'
              width='30px'
              src={post.author.photo.url}
              className='object-cover rounded-md'
            />
            <p className='inline align-middle text-gray-600 font-serif  font-bold ml-2 text-lg'>{post.author.name}</p>
          </div>
        </div>
        <div className='text-center mt-8'>
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 hover:bg-pink-500 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Read More...</span>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default PostCard