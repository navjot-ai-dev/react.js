import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (

    <div className='h-50 w-200 text-white absolute bottom-1/2 left-1/4 text-7xl'>
       <div className='flex gap-5 px-20 mb-10 text-center text-3xl'>
         <Link to="/product/mens">mans</Link>
        <Link to="/product/womens">womens</Link>
        <Link to="/product/kids">kids</Link>
       </div>
      hello guys! I am navjot
    </div>
  )
}

export default Product