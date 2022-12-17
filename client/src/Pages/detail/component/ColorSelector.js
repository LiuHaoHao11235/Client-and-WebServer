import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
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
export const ColorSelctor = (props) => {
  const [color, setColor] = useState(props.colorlist[0]);
  const [colorList, setColorList] = useState(props.colorlist);
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();
  const CalColorIndex = (props, e) => {
    const index = props.colorlist.findIndex((color, index) => {
      if (color === e.target.id) return index;
    });
    if (index < 0) {
      return 0;
    } else return index;
  };
  const handleSelectColor = () => {
    setSelect((select) => {
      return !select;
    });
  };
  const handleSetColor = (e) => {
    var NewcolorList = props.colorlist;
    const ColorIndex = CalColorIndex(props, e);
    NewcolorList = NewcolorList.filter(function (item) {
      return item !== e.target.id;
    });
    setSelect(() => {
      return false;
    });
    setColorList(() => {
      return NewcolorList;
    });
    setColor(() => {
      return e.target.id;
    });
    dispatch({
      type: "SELECT_PHONE_COLOR",
      color: e.target.id,
      ColorIndex: ColorIndex,
    });
  };
  return (
    <ColorButtonGroup selected={select}>
      <PrimaryColorButton
        color={color}
        onClick={handleSelectColor}
      ></PrimaryColorButton>
      {colorList.map((restColor, index) => {
        if (restColor === color) {
          return null;
        }
        return (
          <ColorButton
            id={restColor}
            selected={select}
            key={index}
            color={restColor}
            onClick={handleSetColor}
          ></ColorButton>
        );
      })}
    </ColorButtonGroup>
  );
};
