import { BsFillCartPlusFill } from "react-icons/bs";
import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";
import { Fragment, useState } from "react";
import ShopList from "./ShopList";
export const AddCart = (props) => {
  const CartList = useSelector((state) => state.addcart.CartList);
  const dispatch = useDispatch();
  const addItemToCart = (props) => {
    dispatch({
      type: "ADD_CART_LIST",
      item: props.product,
    });
    message.success({
      type: "success",
      content: "加入購物車",
      duration: 1,
    });
  };
  console.log(CartList);
  return (
    <div onClick={() => addItemToCart(props)}>
      <BsFillCartPlusFill
        id="BsFillCartPlusFill"
        style={{ fontSize: "40px" }}
      ></BsFillCartPlusFill>
    </div>
  );
};
const StyleCart = styled.div`
  font-size: 35px;
  color: white;
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
    color: Crimson;
  }
`;
export const Cart = (props) => {
  const [openInfo, setOpenInfo] = useState(false);
  const handleClickCart = () => {
    setOpenInfo((pervOpenInfo) => {
      return !pervOpenInfo;
    });
  };

  return (
    <Fragment>
      {props.value > 0 ? (
        <StyleCart {...props} onClick={handleClickCart}>
          <HiShoppingCart></HiShoppingCart>
        </StyleCart>
      ) : (
        <HiShoppingCart
          onClick={handleClickCart}
          style={{ fontSize: "35px", color: "white" }}
        ></HiShoppingCart>
      )}
      {openInfo ? <ShopList></ShopList> : null}
    </Fragment>
  );
};
