import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
    console.log(props.users);
  return (
    <div id='right' className=' h-full overflow-x-auto rounded-4xl w-2/3 p-5 flex flex-nowrap gap-6'>
        
    {props.users.map(function(elem , idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
    })}
    
   
    </div>
  )
}

export default Rightcontent