import React from 'react'

const SingleTestimonial = (props) => {
    const { Name, Image, Project, Review} = props.test
  return (
    <div className='col-span-4 p-5 border-2 mx-auto text-center'>
      <img src={Image} alt="" />
      <p className='py-3'>{Review}</p>
      <h2 className='font-bold text-xl pb-3'>{Name}</h2>
      <p className='text-md'>{Project}</p>
    </div>
  )
}

export default SingleTestimonial
