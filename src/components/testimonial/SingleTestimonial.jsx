import React from 'react'

const SingleTestimonial = (props) => {
    const { Name, Image, Project, Review} = props.test
  return (
    <div className='col-span-4 p-5 border-2 mx-auto text-center'>
      <img src={Image} alt="" />
      <p className='py-3'>{Review}</p>
      <h2 className='font-bold text-xl pb-3 text-orange-500'>{Name}</h2>
      <p className='text-md font-bold'><span className='text-blue-800'>Projct Name:</span> {Project}</p>
    </div>
  )
}

export default SingleTestimonial
