// import axios from "axios";
// import { useEffect, useState } from "react";
import styled from "styled-components";
const CardBody = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Card = () => {
  // const { users } = useUsers();
  // console.log(users);
  // console.log("render");
  return (
    <CardBody>
      {
        <button
          onClick={() => {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("password");
            sessionStorage.removeItem("initAuthenticated");
          }}
        >
          清除所有sessionStorage;
        </button>
      }
    </CardBody>
  );
};

export default Card;
