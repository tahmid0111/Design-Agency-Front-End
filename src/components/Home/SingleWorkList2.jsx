import React from 'react'

const SingleWorkList2 = (props) => {
    const {item} = props
  return (
    <div className='col-span-12 sm:col-span-4 mx-auto text-center mb-10'>
        <div className='border-2 rounded-xl w-[280px] sm:w-[190px] md:w-[220px] lg:w-[280px] py-10 shadow-lg shadow-blue-200'>
            <img className='mx-auto' src={item.Image} alt="" />
            <p className='py-5 text-2xl 2xl:text-3xl font-bold'>{item.Number}</p>
            <p className='font-semibold 2xl:text-xl'>{item.Expression}</p>
        </div>
    </div>
  )
}

export default SingleWorkList2
