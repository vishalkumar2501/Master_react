import React from 'react'
import RightCardContent1 from './RightCardContent1'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-60 rounded-3xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />

        <RightCardContent1 id={props.id} color={props.color} tag={props.tag}/>

    </div>
  )
}

export default RightCard