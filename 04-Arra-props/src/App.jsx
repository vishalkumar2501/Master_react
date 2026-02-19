import React from "react"
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className ='parent'>

        <div className="card">
            <div className="top">
                <img src="https://imgs.search.brave.com/8KgsRJzLVNqFn5YGp7ZkB16L1Znegr72N45yDZpUzKg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc" alt="" />
                <button> Save <Bookmark size={17 }/> </button>
            </div>
            <div className="center">
                <h3>Amazone <span >5 Days Ago</span></h3>
                <h2>Senior UI/UX Designer</h2>
                <div className="tag">
                <h4>Part-Time</h4>
                <h4>Secinor Level</h4>
                </div>
            </div>
            <div className="bottom">
            <div className= 'btag'>
                    <h3>$120/hr</h3>
                    <p>Mumbi, Indians</p>
            </div>
                 <button>Apply Now </button>

                </div>
            </div>
    </div>

    
  )
}

export default App