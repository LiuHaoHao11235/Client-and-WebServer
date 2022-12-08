import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton, Space } from "antd";
const CardBody = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const CardTextSection = styled.div`
  width: 600px;
  height: 800px;
  /* background-color: lightblue; */
`;
const CardPictureSection = styled.div`
  width: 620px;
  height: 650px;
  display: flex;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  /* background-color: lightgreen; */
`;
const CardTextItem = styled.div`
  width: 100%;
  padding-bottom: 60px;
  border-bottom: 1px #e5e5e5 solid;
  margin-top: 60px;
  text-align: center;
`;
const TextTitle = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: #333;
`;
const Text = styled.span`
  display: inline-block;
  width: 250px;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  color: #333;
  text-align-last: left;
  line-height: 16px;
  margin-left: 50px;
`;
const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:5000/PhonesDetail`)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, []);
  return { users };
};
const Card = () => {
  const { users } = useUsers();
  const array = [];
  var arrayOfPrize = [];
  if (users[0]) {
    console.log(users[0]);
    Object.keys(users[0].texts).forEach(function (key) {
      array.push(users[0].texts[key]);
    });
    arrayOfPrize = array.slice(-4);
  }
  return (
    <CardBody>
      <CardTextSection>
        <CardTextItem>
          <TextTitle>
            {users[0] ? (
              users[0].phone
            ) : (
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              ></Skeleton.Input>
            )}
          </TextTitle>
        </CardTextItem>
        <CardTextItem>
          {array[0] ? (
            array.map((text) => {
              return <Text key={text}>{text}</Text>;
            })
          ) : (
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              />
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              />
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              />
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              />
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              />
            </Space>
          )}
        </CardTextItem>
        <CardTextItem style={{ display: "flex", flexDirection: "column" }}>
          {arrayOfPrize.map((text) => {
            return <Text>{text}</Text>;
          })}
        </CardTextItem>
      </CardTextSection>
      <CardPictureSection>
        {users[0] ? (
          <img style={{ width: "100%" }} src={users[0].picture.white1}></img>
        ) : (
          <Skeleton.Image active={true} />
        )}
      </CardPictureSection>
    </CardBody>
  );
};
export default Card;
