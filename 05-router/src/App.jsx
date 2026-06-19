import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Product from './pages/prduct.jsx'
import Navbar from './component/navbar.jsx'
import Footer from './component/footer.jsx'
import Notfound from './pages/notfound.jsx'
import Navbar2 from './component/navbar2.jsx'
const App = () => {
  return (
    <div className='h-screen w-screen relative bg-linear-to-r from-gray-900 to-gray-900'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact/product' element={<Product />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      
     <Footer />
       
    </div>
  )
}

export default App