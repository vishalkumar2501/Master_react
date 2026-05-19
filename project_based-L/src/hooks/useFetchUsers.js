import {
  useEffect,
  useState
} from "react";

const useFetchUsers = () => {

  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchUsers = async () => {

      try{

        const response =
          await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

        if(!response.ok){
          throw new Error(
            "Failed to fetch users"
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

  return {
    users,
    loading,
    error
  };
};

export default useFetchUsers;