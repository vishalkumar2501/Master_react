import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'



const App = () => {
    const users=[
        { 
            img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
            intro: '', 
            color: 'blue',
            tag:'Satisfied'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1661590867485-c67026a70bc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
            intro: '', 
            color: 'green',
            tag:'UnderServed'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
            intro: '', 
            color: 'yellow',
            tag:'Underbanked'
        },
        {
            img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
            intro: '', 
            color: 'black',
            tag:'UnderWare'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            intro: '', 
            color: 'orange',
            tag:'Average'
        }
    ]
  return (
    <div>
        <Section1  users={users}/>
        <Section2 />
    </div>
  )
}

export default App