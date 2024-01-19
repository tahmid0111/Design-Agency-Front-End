import React from 'react'
import { featured, featuredData } from '../../database/data'

const FeaturedProduct = () => {
  return (
    <div className='bg-blue-200'>
        <div className='container mx-auto px-5'>
        <div className='py-10'>
            {
                featured.map((item, i) => 
                <div key={i}>
                    <p className='text-orange-500 font-semibold text-lg'>{item.title}</p>
                    <p className='pt-5 md:w-[50%] lg:w-[40%] text-2xl font-bold'>{item.subtitle}</p>
                </div>
                )
            }
        </div>
        </div>
    </div>
  )
}

export default FeaturedProduct
