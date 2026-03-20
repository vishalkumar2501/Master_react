import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {setUsers(data)})
      .catch((err) => {console.log(err)})}, [])

  return (
    <div>
      <h1>Users List</h1>

      {
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))
      }

    </div>
  )
}

export default App