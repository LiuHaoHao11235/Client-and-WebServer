import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton, Space } from "antd";
import RomSizeSelector from "./RomSizeSelector";
import { ColorSelctor } from "./ColorSelector";
import { Favorite } from "./Favorite";
import { AddCart } from "./Carts";
import { useSelector, useDispatch } from "react-redux";
const CardBody = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const CardRightSection = styled.div`
  margin-top: 100px;
  height: 800px;
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardLeftSection = styled.div`
  margin-top: 110px;
  width: 600px;
  height: 800px;
`;
const CardPictureSection = styled.div`
  width: 620px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 70px;
  /* background-color: lightgreen; */
`;
const CardBuyerLable = styled.label`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const CardBuyerSection = styled.div`
  width: 620px;
  height: 280px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(211, 211, 211, 0.3);
`;
const CardBuyerItem = styled.div`
  margin-top: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const CardTextTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(211, 211, 211, 0.3);
`;
const CardTextItem = styled.div`
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  background-color: rgba(211, 211, 211, 0.3);
  padding-top: 60px;
  display: inline-block;
  margin-top: 10px;
`;
const CardTextPrize = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 10px;
  background-color: rgba(211, 211, 211, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "PRODUCT_IS_LOADING",
    });
    setTimeout(() => {
      axios
        .get(`http://localhost:5000/PhonesDetail`)
        .then((res) => {
          setUsers(res.data);
          dispatch({
            type: "PRODUCT_IS_LOADED",
          });
        })
        .catch((err) => console.log(err));
    }, 2000);
  }, [dispatch]);
  return { users };
};
const DetailCard = (props) => {
  const index = useSelector((state) => state.addcart.ProductIndex);
  const dispatch = useDispatch();
  const TotatalSequence = props.TotatalSequence;
  const { users } = useUsers();
  const arrayOfAllText = [];
  var arrayOfPrice = [];
  useEffect(() => {
    dispatch({
      type: "RESET_SPECIFICATION",
    });
  }, [props]);
  if (users[TotatalSequence]?.[index]) {
    console.log(users[TotatalSequence][index]);
    Object.keys(users[TotatalSequence][index].texts).forEach(function (key) {
      arrayOfAllText.push(users[TotatalSequence][index].texts[key]);
    });
    arrayOfPrice = arrayOfAllText.splice(-4); //arrayOfAllText變成規格text
  }

  return (
    <CardBody>
      <CardLeftSection>
        <CardTextTitle>
          <TextTitle>
            {users[TotatalSequence]?.[index] ? (
              users[TotatalSequence][index].phone
            ) : (
              <Skeleton.Input
                style={{ width: "400px" }}
                active={true}
                shape={"round"}
              ></Skeleton.Input>
            )}
          </TextTitle>
        </CardTextTitle>
        <CardTextItem>
          {arrayOfAllText[0] ? (
            arrayOfAllText.map((text) => {
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
        <CardTextPrize style={{ display: "flex", flexDirection: "column" }}>
          {arrayOfPrice.map((text, index) => {
            return <Text key={index}>{text}</Text>;
          })}
        </CardTextPrize>
      </CardLeftSection>
      <CardRightSection>
        <CardPictureSection>
          {users[TotatalSequence]?.[index] ? (
            <img
              style={{ width: "100%" }}
              src={users[TotatalSequence][index].picture.white1}
              alt="phone1"
            ></img>
          ) : (
            <Skeleton.Image active={true} />
          )}
        </CardPictureSection>
        <CardBuyerSection>
          <CardBuyerItem>
            <CardBuyerLable htmlFor="BsFillCartPlusFill">
              加入購物車
            </CardBuyerLable>
            <AddCart
              product={users[TotatalSequence]?.[index]?.phone}
              price={arrayOfPrice?.[2]?.split(":")[1]}
            ></AddCart>
          </CardBuyerItem>
          <CardBuyerItem>
            <CardBuyerLable htmlFor="Favorite">加入最愛</CardBuyerLable>
            <Favorite id="Favorite"></Favorite>
          </CardBuyerItem>
          <CardBuyerItem>
            <CardBuyerLable htmlFor="ColorSelctor">選擇顏色</CardBuyerLable>
            <ColorSelctor id="ColorSelctor"></ColorSelctor>
          </CardBuyerItem>
          <CardBuyerItem>
            <CardBuyerLable>選擇容量</CardBuyerLable>
            <RomSizeSelector></RomSizeSelector>
          </CardBuyerItem>
        </CardBuyerSection>
      </CardRightSection>
    </CardBody>
  );
};

export default DetailCard;
