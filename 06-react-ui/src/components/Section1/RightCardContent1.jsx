import React from 'react'

const RightCardContent1 = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full text-2xl font-semibold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='font-semibold leading-tight text-white mb-4 leading-relaxed'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum eveniet est aut architecto molestias?
                </p>
                <div className='flex justify-between '>
                    <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-4 py-1 text-lg rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-bold px-3.5 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
        </div>
  )
}

export default RightCardContent1