import React, { useState, useEffect } from 'react'
import { getCatergories } from '../services'
import Link from  'next/link'

const Categories = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    getCatergories()
      .then((newCategories) => setCategory(newCategories))
  }, [])



  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 space-y-4'>
      <h1 className="text-2xl mb-8 font-bold border-b pb-4 text-black ">
        Categories
      </h1>
      {category.map((category) =>(
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='text-black cursor-pointer block border-b w-40 font-semibold'>{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories