import { useState } from "react";
import styled from "styled-components";

const defaultType = {
  styled: {
    color: "rgb(0, 0, 0, 0.7)",
    backgroundcolor: "rgb(128, 128, 128, 0.1)",
  },
  hover: {
    color: "rgb(0, 0, 0, 0.7)",
    backgroundcolor: "grey",
  },
};
const primaryType = {
  styled: {
    color: "rgb(0, 0, 0, 0.7)",
    backgroundcolor: "rgb(128, 128, 128, 0.1)",
  },
};
const dashType = {
  styled: {
    color: "red",
    backgroundcolor: "blue",
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
  width: 170px;
  height: 40px;
  background: #b90b26;
  color: aliceblue;
  border-radius: 10px;
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
export default Button = (props) => {
  const [loadState, setLoadState] = useState({
    isloading: false,
  });
  const handleonclick = () => {
    if (loadState.isloading) {
      setLoadState((loadState.isloading = true));
    }
  };
  if (props.loading && !loadState.isloading) {
    setTimeout(() => {
      setLoadState((loadState.isloading = false));
    }, props.loading);
  }
  if (!loadState.isloading) {
    return (
      <Stylebutton
        {...props}
        onClick={() => {
          handleonclick();
          props.onClick();
        }}
      ></Stylebutton>
    );
  } else {
    return <Stylebutton {...props}>載入中</Stylebutton>;
  }
};
