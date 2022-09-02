import React from 'react'

const Author = ({author}) => {
  return (
    <div className=' bg-black  bg-opacity-20 text-center  mt-20 mb-8 p-12 relative rounded-lg font-serif '>
      <div className="absolute left-0 right-0 -top-14 mx-auto flex w-full justify-center items-center ">
      <img src={author.photo.url} alt={author.name} unoptimized
      height='100px' width='100px'  />
     
      </div>
      <h3 className='text-white my-2 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author