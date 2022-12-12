import { BsFillCartPlusFill } from "react-icons/bs";
import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import { Fragment, useState } from "react";
import ShopList from "./ShopList";
const StyleAddCart = styled.div`
  font-size: 40px;
  color: green;
  transition: all 0.1s linear;
  &:hover {
    color: lightgreen;
    transform: scale(1.1);
  }
`;
const StyleCart = styled.div`
  font-size: 35px;
  color: orange;
  &:after {
    content: attr(value);
    font-size: 16px;
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 0 5px;
    position: absolute;
    right: 10px;
    top: 5px;
    opacity: 0.9;
    background-color: red;
  }
  &:hover {
    color: lightgreen;
  }
`;

export const AddCart = (props) => {
  const Product_Loading_State = useSelector(
    (state) => state.addcart.Product_Loading_State
  );
  // console.log("Product_Loading_State", Product_Loading_State);
  const dispatch = useDispatch();
  const addItemToCart = (props) => {
    if (!Product_Loading_State) {
      dispatch({
        type: "ADD_CART_LIST",
        name: props.product,
        price: props.price,
      });
      message.success({
        type: "success",
        content: "加入購物車",
        duration: 1,
      });
    }
  };
  return (
    <StyleAddCart onClick={() => addItemToCart(props)}>
      <BsFillCartPlusFill></BsFillCartPlusFill>
    </StyleAddCart>
  );
};
export const Cart = () => {
  const CartList = useSelector((state) => state.addcart.CartList);
  const [openInfo, setOpenInfo] = useState(false);
  const handleClickCart = () => {
    setOpenInfo((pervOpenInfo) => {
      return !pervOpenInfo;
    });
  };

  return (
    <Fragment>
      {
        <StyleCart value={CartList?.length} onClick={handleClickCart}>
          <HiShoppingCart></HiShoppingCart>
        </StyleCart>
      }
      {openInfo ? <ShopList></ShopList> : null}
    </Fragment>
  );
};
