import React from 'react'

const Navbar = (props) => {

    const changetheam = ()=> {
        props.settheam('Dark')
    }
  return (
    <div>
        <button onClick={changetheam}>Change Theam</button>{/* child se pare ko change kiea gaya hai   */}
    </div>
  )
}

export default Navbar