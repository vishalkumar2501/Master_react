import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {
        const [Data, setData] = useState([])
        const getdata = async ()=>{
             const value = await axios.get('https://picsum.photos/v2/list')
             setData(value.data);
            }
  return (
    <div>
        <button onClick={getdata}>GETDATA</button>
        <div>
            {Data.map((elem , idx)=>{
                    return <h3 key={idx}>hello,{idx} {elem.author}</h3>
            })}
        </div>
     </div>
  )
}

export default App