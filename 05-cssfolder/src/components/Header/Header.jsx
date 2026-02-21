import React from 'react'
import styles from './Header.module.css'//css import show check speling correctly

const Header = () => {              //or yaha styles.hdr us className ka naam just below
  return (
    <div className = {styles.hdr}>             
        <h3> Header </h3> 
        <button className={styles.btn}>Login</button>

    </div>
  )
}

export default Header