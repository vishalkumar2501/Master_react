import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import Arrow from './Arrow'

const Leftcontent = () => {
  return (
    <div className=' h-full w-1/3  flex flex-col justify-between px-10' >
        <HeroText />
        <Arrow />
    </div>
  )
}

export default Leftcontent