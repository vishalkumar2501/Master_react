import React from 'react'
import NotFound from './../Pages/NotFound';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 bg-blue-600'>
        <h2 className='text-xl font-bold '>VishalEnterPrises</h2>
        <div className='flex gap-8 text-lg font-bold '>
            <a href="/"> Home</a>
            <a href="/about">About</a>
            <a href="/product">Product</a>
 
        </div>
    </div>
  )
}

export default Navbar