import React from 'react'
import { useState } from 'react'

const App = () => {

   const [num , setfirst] = useState(28)
  
   function increaseNum(){
    setfirst(num => num+1)
   }
   function decreaseNum(){
    setfirst(num => num-1)
   }

  return (
    <div>

        <h1>{num}</h1>
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App



// import React, { useState } from 'react'

// const App = () => { 
    
//     const [num, setfirst] = useState(20)  // [yaha vlue jo rakhna hai , yaha function rakhna hai jo update kerna hai]
//     const [str, settopic] = useState(" reactjs")

//     function changenum(){
//         setfirst(num+1)
//         settopic(" javascript")
//     }

    
// return (
//     <div>

//     <h1>hey i am {num} year old guy <br /> i am learning{ str} </h1>
//     <button onClick={changenum}>click</button>
//     </div>
//   )
// }

// export default App