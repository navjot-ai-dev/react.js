import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()
  return (
    

    <div className='bg-purple-400 text-amber-50 text-3xl h-15 p-4 w-full flex justify-start items-center gap-4    '>
      <button
       onClick={() => navigate(-1)}
      className='bg-amber-300 text-2xl text-white h-8 w-20'>prev</button>
      <button
       onClick={() => navigate(1)}
      className='bg-amber-300 text-2xl text-white h-8 w-20'>next</button>
      <button
       onClick={() => navigate('/')}
      className='bg-amber-300 text-2xl text-white h-8 w-20'>home</button>
    </div>
  )
}

export default Navbar2
