import React from 'react'

const App = () => {
    const [title, setTitle] = useState('');
    const submitHandeler = (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        setTitle('');
    } 
  return (
    <div>
        <form onSubmit={(e)=> {
             submitHandeler(e);
            }} >
            <input type="text" 
            placeholder="Enter your name"
            value={title}
            onChange={(e)=>{  //two way binding isme value bhi set karna padta hai aur onChange bhi dena padta hai
            //  kyoki jab bhi user input karega to onChange trigger hoga aur value update hogi
                setTitle(e.target.value);
            }}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default App

/* two way binding kaise kaam kerta useImperativeHandle
State → UI (input me dikhe)
UI → State (user input se update ho)

User type → onChange fire

→ e.target.value mila
    eg user type "V"

→ setTitle("V")
    eg setTitle("V")
    
→ state update
    eg title = "V"

→ re-render
 

→ value update
    eg value = "V"

→ UI me "V" dikha
*/