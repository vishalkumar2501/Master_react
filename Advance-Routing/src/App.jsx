import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home/>}/>  
          <Route path='/About' element={<About/>}/>
          <Route path='/Product' element={<Product/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer />

    </div>
  )
}

export default App