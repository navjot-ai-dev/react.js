import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-full p-8 bg-purple-700 flex justify-between items-center flex-row text-2xl text-white font-semibold'>
            <h1>My website</h1>
                <div className='flex gap-8'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
        
                </div>
    </div>
  )
}

export default Navbar