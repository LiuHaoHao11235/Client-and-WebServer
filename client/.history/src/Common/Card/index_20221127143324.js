import axios from "axios";
import { useEffect, useState } from "react";
const Card = () => {
  const { users } = useUsers();
  return (
    <div>
      <h1>Custom hooks</h1>
      {users.map((users) => {
        return (
          <>
            <h3>this is {users.userID}</h3>
            <div>{users.data}</div>
          </>
        );
      })}
    </div>
  );
};
const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/commodity`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return { users };
};
