import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
const CardBoby = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: "center";
  align-items: center;
  border: 1px solid black;
`;
const Card = () => {
  const { users } = useUsers();
  console.log(users);
  console.log("render");
  return (
    <CardBoby>
      <h1>costum hook</h1>
      {users.map((user) => {
        return (
          <div key={user.userID}>
            <h3>this is {user.userID}</h3>
            <div>{user.data.phone}</div>
          </div>
        );
      })}
    </CardBoby>
  );
};
const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:8000/users`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, []);
  return { users };
};
export default Card;
