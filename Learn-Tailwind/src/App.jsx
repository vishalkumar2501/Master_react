import React from 'react'

const App = () => {
  return (
    <div>
        <nav className='width-full items-center height-10 flex justify-between bg-blue-950 text-green-500 px-5 py-3 '>
            <div>
                <h1 className='text-xl font-bold'>VISHALBUILDERS</h1>
            </div>
            <div className='flex gap-5 font-bold '>
                <h2>HOME</h2>
                <h2>ABOUT</h2>
                <h2>CONTACT</h2>
                <h2>PRODUCT</h2>
            </div>
        </nav>

        <body className=' width-full  bg-black'>
            <div >

            </div>
        </body>


        <footer className="w-full height-20 items-center absolute bottom-0">
        <div className='flex justify-between bg-blue-950 text-green-500 px-5 py-8 font-bold'>
          <div>
            <h1 className='text-xl'>VISHALBUILDERS</h1>
          </div>
          <div className='flex gap-5'>
            <h2>HOME</h2>
            <h2>ABOUT</h2>
            <h2>CONTACT</h2>
            <h2>PRODUCT</h2>
          </div>
        </div>
      </footer>
      
    </div>
        
    
  )
}

export default App