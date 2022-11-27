import { useState } from "react";
import styled from "styled-components";
const defaultType = {
  styled: {
    color: "rgb(0, 0, 0, 0.6)",
    background: "rgb(128, 128, 128, 0.2)",
    width: "100px",
    height: "40px",
  },
  hover: {
    color: "white",
    background: "grey",
  },
};
const primaryType = {
  styled: {
    background: "#b90b26",
    color: "aliceblue",
    width: "170px",
    height: "40px",
  },
};
const dashType = {
  styled: {
    width: "170px",
    height: "40px",
    color: "red",
    backgroundcolor: "blue",
    border: "dash",
  },
};

const variantBox = {
  default: defaultType,
  primary: primaryType,
  dash: dashType,
};
const Stylebutton = styled.button`
  margin-right: 30px;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  transition: all 0.1s linear;
  ${(props) => {
    if (variantBox[props.variant]) {
      return props.variant.styled;
    } else {
      return defaultType.styled;
    }
  }};
  &:hover {
    ${(props) => {
      if (variantBox[props.variant]) {
        return props.variant.hover;
      } else {
        return defaultType.hover;
      }
    }};
  }
`;
const Button = (props) => {
  console.log("rerender");
  const [loadState, setLoadState] = useState({
    isloading: false,
  });
  if (props.loading && loadState.isloading) {
    const delay = props.loading;
    setTimeout(() => {
      setLoadState({ isloading: false });
    }, props.loading);
  }
  if (!loadState.isloading) {
    return (
      <Stylebutton
        {...props}
        onClick={(e) => {
          setLoadState({ isloading: true });
          props.onClick(e);
          console.log("nigg");
        }}
      ></Stylebutton>
    );
  } else {
    return <Stylebutton {...props}>載入中</Stylebutton>;
  }
};
export default Button;
