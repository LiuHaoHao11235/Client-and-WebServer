import { useState } from "react";
import styled from "styled-components";
const ColorButtonGroup = styled.div`
  height: 200px;
`;
const PrimaryColorButton = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => {
    return props.color;
  }};
  border: 1px gray solid;
  border-radius: 50%;
  margin-bottom: 5px;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const ColorButton = styled.div`
  height: 25px;
  width: 25px;
  background-color: ${(props) => {
    return props.color;
  }};
  border: 1px gray solid;
  border-radius: 50%;
  margin-top: 5px;
  margin-bottom: 5px;
  transform: ${(props) => {
    return props.selected ? "scale(1)" : "scale(0)";
  }};
  opacity: ${(props) => {
    return props.selected ? 1 : 0;
  }};
  transition: all 0.1s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ColorSelctor = () => {
  const [color, setColor] = useState({
    color: "white",
    colorList: ["red", "blue", "black", "green"],
  });
  const [select, setSelect] = useState(false);
  const handleSelectColor = () => {
    setSelect((select) => {
      return !select;
    });
  };
  const handleSetColor = (e) => {
    var NewcolorList = ["white", "red", "blue", "black", "green"];
    NewcolorList = NewcolorList.filter(function (item) {
      return item !== e.target.id;
    });
    setSelect(() => {
      return false;
    });
    setColor((PrevState) => ({
      ...PrevState,
      color: e.target.id,
      colorList: NewcolorList,
    }));
  };
  return (
    <ColorButtonGroup selected={select}>
      <PrimaryColorButton
        color={color.color}
        onClick={handleSelectColor}
      ></PrimaryColorButton>
      {color.colorList.map((color, index) => {
        return (
          <ColorButton
            id={color}
            selected={select}
            key={index}
            color={color}
            onClick={handleSetColor}
          ></ColorButton>
        );
      })}
    </ColorButtonGroup>
  );
};
