import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton, Space } from "antd";
import RomSizeSelector from "./RomSizeSelector";
import { ColorSelctor } from "./ColorSelector";
import { Favorite } from "./Favorite";
import { AddCart } from "./Carts";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../Slider/Slider";
const CardBody = styled.div`
  width: 1280px;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const CardRightSection = styled.div`
  margin-top: 60px;
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
  margin-top: 10px;
  background-color: rgba(211, 211, 211, 0.8);
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
`;
const CardBuyerLable = styled.label`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const CardBuyerHeadSection = styled.div`
  width: 100%;
  background-color: rgba(211, 211, 211, 0.8);
  height: 140px;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
`;
const StyledBuyerHeadItem = styled.div`
  width: 25%;
  height: 140px;
`;
const CardBuyerSection = styled.div`
  width: 620px;
  height: 220px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(211, 211, 211, 0.8);
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
`;
const CardBuyerItem = styled.div`
  margin-top: 50px;
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
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  background-color: rgba(211, 211, 211, 0.8);
`;
const CardTextItem = styled.div`
  width: 100%;
  height: 350px;
  box-sizing: border-box;
  background-color: rgba(211, 211, 211, 0.8);
  padding-top: 60px;
  display: inline-block;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  margin-top: 10px;
`;
const CardTextPrize = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 10px;
  background-color: rgba(211, 211, 211, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
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
// const BuyerHeadItem = (props) => {
//   return (
//     <StyledBuyerHeadItem>
//       <img src={props.seriespicture}></img>
//     </StyledBuyerHeadItem>
//   );
// };

const useUsers = (props) => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "PRODUCT_IS_LOADING",
    });
    axios
      .get(`http://localhost:5000/PhonesDetail`)
      .then((res) => {
        setUsers(res.data);
        dispatch({
          type: "PRODUCT_IS_LOADED",
        });
        dispatch({
          type: "REFETCH_SPECIFICATION",
          ProductSpecification: {
            color: res.data[props.TotatalSequence]?.[3].colorlist[0],
            rom: res.data[props.TotatalSequence]?.[props.index].rom,
            ColorIndex: 0,
          },
        });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);
  return { users };
};
const DetailCard = (props) => {
  var ProductIndex = useSelector((state) => state.addcart.ProductIndex);
  if (ProductIndex === "") {
    ProductIndex = props.index;
  }
  const ColorIndex = useSelector(
    (state) => state.addcart.ProductSpecification.ColorIndex
  );
  const TotatalSequence = props.TotatalSequence;
  const { users } = useUsers(props);
  const arrayOfAllText = [];
  var arrayOfPrice = [];
  if (users[TotatalSequence]?.[ProductIndex]) {
    // console.log(users[TotatalSequence][index]);
    Object.keys(users[TotatalSequence][ProductIndex].texts).forEach(function (
      key
    ) {
      arrayOfAllText.push(users[TotatalSequence][ProductIndex].texts[key]);
    });
    arrayOfPrice = arrayOfAllText.splice(-4); //arrayOfAllText變成規格text
  }

  return (
    <CardBody>
      <CardLeftSection>
        <CardTextTitle>
          <TextTitle>
            {users[TotatalSequence]?.[ProductIndex] ? (
              users[TotatalSequence][ProductIndex].phone
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
              style={{ display: "flex", alignItems: "center" }}
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
          {arrayOfPrice[0] ? (
            arrayOfPrice.map((text, index) => {
              return <Text key={index}>{text}</Text>;
            })
          ) : (
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex", alignItems: "center" }}
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
            </Space>
          )}
        </CardTextPrize>
      </CardLeftSection>
      <CardRightSection>
        <CardBuyerHeadSection></CardBuyerHeadSection>
        <CardPictureSection>
          <div
            style={{
              width: "95%",
              height: "90%",
              border: "1px grey solid",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {users[TotatalSequence]?.[3] ? (
              <Slider
                checkbox={true}
                auto={false}
                picture={users[TotatalSequence]?.[3].picture.slice(
                  ColorIndex * 3,
                  (ColorIndex + 1) * 3
                )}
              ></Slider>
            ) : (
              <Skeleton.Image active={true} />
            )}
          </div>
        </CardPictureSection>
        <CardBuyerSection>
          <CardBuyerItem>
            <CardBuyerLable>加入購物車</CardBuyerLable>
            <AddCart
              product={users[TotatalSequence]?.[ProductIndex]?.phone}
              price={arrayOfPrice?.[2]?.split(":")[1]}
            ></AddCart>
          </CardBuyerItem>
          <CardBuyerItem>
            <CardBuyerLable>加入最愛</CardBuyerLable>
            <Favorite></Favorite>
          </CardBuyerItem>
          <CardBuyerItem>
            <CardBuyerLable>選擇顏色</CardBuyerLable>
            {users[TotatalSequence]?.[3] ? (
              <ColorSelctor
                colorlist={users[TotatalSequence]?.[3].colorlist}
              ></ColorSelctor>
            ) : null}
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
