import React, {
  useEffect,
  useState
} from "react";

import UserCard
from "../components/UserCard";

import Loader
from "../components/Loader";

const Users = () => {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // Fetch API Data
  useEffect(() => {

    const fetchUsers = async () => {

      try{

        const response =
          await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

        if(!response.ok){
          throw new Error(
            "Failed to fetch data"
          );
        }

        const data =
          await response.json();

        setUsers(data);

      }
      catch(error){

        setError(error.message);

      }
      finally{

        setLoading(false);

      }
    };

    fetchUsers();

  }, []);

  // Loading State
  if(loading){
    return <Loader />;
  }

  // Error State
  if(error){
    return (
      <h1 className="error">
        {error}
      </h1>
    );
  }

  return (
    <div className="container">

      <h1>API Users</h1>

      <div className="cardContainer">

        {
          users.map((user) => (

            <UserCard
              key={user.id}
              user={user}
            />

          ))
        }

      </div>

    </div>
  );
};

export default Users;