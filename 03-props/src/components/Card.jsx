import React from 'react'

const card = (props) => {
    console.log(props);


  return (
    <div className="card">
           <img src={props.img} alt="" />
            <h2> {props.user} , {props.age} </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <button> VIEW PROFILE </button>
        </div>
  )
}

export default card

