import React from 'react'

const SingleWorkList2 = (props) => {
    const {item} = props
  return (
    <div className='col-span-12 sm:col-span-6 xl:col-span-4 mx-auto text-center mb-10'>
        <div className='border-2 rounded-xl w-[280px] py-10 shadow-lg shadow-blue-200'>
            <img className='mx-auto' src={item.Image} alt="" />
            <p className='py-5 text-2xl font-bold'>{item.Number}</p>
            <p className='font-semibold'>{item.Expression}</p>
        </div>
    </div>
  )
}

export default SingleWorkList2
