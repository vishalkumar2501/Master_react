import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

const App = () => {
    const [theam, settheam] = useState('Light')
  return (
    <div>
        <h1>The Theam is {theam} </h1>
        <Navbar  theam={theam} settheam={settheam}/>  { /*   parent  */}

    </div>
  )
}

export default App