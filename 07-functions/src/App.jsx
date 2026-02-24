// import React from 'react'

// const App = () => {
//    function btnClicked(){
//     console.log("Button Clicked")
//    }
//    function mouseEnter(){
//     console.log("Mouse Enter")
//    }


//   return (
//     <div>
//         <h1>Hello guys</h1>
//         <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click Me</button>
//         <button onClick={btnClicked}>Explore this</button>
//     </div>
//   )
// }

// export default App
  



// 1st type of function call--------------------------------------------------------------------

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <h1>Hello guys</h1>
//         <button onClick={()=>{
//             console.log("Button Clicked")
//         }}>Click Me</button>

//         <button>Explore this</button>
//     </div>
//   )
// }

// export default App

// 2nd type of function call---------------------------------------------------------------------




// import React from 'react'

// const App = () => {
//     function change(value){
//         console.log(value)
//     }
//   return (
//     <div>
//         <input onChange={(elem)=>{
//              change(elem.target.value) 

//         }} type="text" placeholder='Enter your name '/>
//     </div>
//   )
// }

// export default App

//  yaha new function isliea banaya hai taki value pass ker sake 
// aur ye 3rd type ka function thaa jisse bahot bade kaam me le sakte hai pahle ke do only chote kaam me le sakte hai-------------------------------------------------------------------------------------


// import React from 'react'

// const App = () => {
//   return (
//     <div>

//         <div onMouseMove={(elem)=>{
//             console.log(elem)
//         }} className="box"></div>

//     </div>
//   )
// }

// export default App
//===================================================================================================

// import React from 'react'

// const App = () => {
//     const pagescroll= (elem) => {
//         if(elem > 0){
//             console.log("Seeda Scroll Down")
//         }else{
//             console.log(" ulta Scroll Up")
//         }
//     }
//   return (
//     <div onWheel={(elem)=>{
           
//         pagescroll(elem.deltaY)
//     }}>
//         <div className="page1"></div>
//         <div className="page2"></div>
//         <div className="page3"></div>
//     </div>
//   )
// }

// export default App