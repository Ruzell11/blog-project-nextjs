import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCatergories } from '../services'



const Header = () => {

    const [category, setCategory] = useState([])
    useEffect(() => {
        getCatergories()
            .then((newCategories) => setCategory(newCategories))
    }, [])

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className="border-b w-full inline-block border-black border-7 py-8">
                <div className="md:float-left block">
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white font-serif'>
                            Daily News</span>

                    </Link>
                </div>
                <div className='hidden md:float-left md:contents font-mono'>
                    {category.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header