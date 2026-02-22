import React from 'react'
import Leftcontent from './Leftcontent';
import Rightcontent from './Rightcontent';

const Page1content = (props) => {
  return (
    <div className='pb-10 pt-5 gap-10 flex justify-between items-center h-[90vh]'>
        < Leftcontent />
        < Rightcontent users={props.users} />
         
    </div>
  )
}

export default Page1content