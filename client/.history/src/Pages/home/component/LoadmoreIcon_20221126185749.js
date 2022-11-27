import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <BsChevronDoubleDown
      onClick={() => {
        props.onClick;
        console.log("!!!!!!!");
      }}
      title="加載更多"
    ></BsChevronDoubleDown>
  );
};
