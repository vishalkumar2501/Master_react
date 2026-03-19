import React from 'react'

const App = () => {

  const user = {
    username: 'Sarthak',
    age: 18,
    city: 'Bhopal'
  }
  /*localStorage.clear() or sessionStorage.clear() ---->> se local or session storage clear ho jata hai  */ 
  localStorage.setItem('user', JSON.stringify(user)) //local storage me data/value ko string ke form me bhejte hai
  const usera = JSON.parse(localStorage.getItem('user'))//isliea used JSON.stringify ka used ker rahe hai taki data ko string ke form me bheja ja sake aur jab data ko get karte hai to JSON.parse ka use ker rahe hai taki string ko wapas object me convert kar sake

  console.log(usera);
  return (
    <div>App</div>
  )
}

export default App

  /*1. localStorage.setItem('key', value) ---->> data ko local storage me store karta hai (string format me) */

  /*2. localStorage.getItem('key') ---->> local storage se data ko get karta hai (string me milta hai) */

  /*3. localStorage.removeItem('key') ---->> kisi specific key/value ko delete karta hai */

  /* localStorage.clear() ---->> pura local storage clear kar deta hai */