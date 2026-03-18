import React from 'react'

const App = () => {

    const submitHandeler=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form  onSubmit={submitHandeler}>
            <input type="text" placeholder='Enter your name' />
            <input type="number" placeholder='Enter your age' />
            <button>submit</button>
        </form>
    </div>
  )
}

export default App