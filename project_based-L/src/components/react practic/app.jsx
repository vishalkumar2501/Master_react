
import React, { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {

        setUsers(data);
        setLoading(false);

      })
      .catch((error) => {

        console.log(error);
        setLoading(false);

      });

  }, []);

  return (
    <div style={{ padding: "30px" }}>

      <h1>Fetch API Data</h1>

      {
        loading
          ? <h3>Loading...</h3>
          : (
              <ul>
                {
                  users.map((user) => (
                    <li key={user.id}>
                      {user.name}
                    </li>
                  ))
                }
              </ul>
            )
      }

    </div>
  );
}

export default App;
```
