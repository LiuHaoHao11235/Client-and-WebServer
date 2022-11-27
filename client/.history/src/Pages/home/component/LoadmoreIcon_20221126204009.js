import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <BsChevronDoubleDown
      {...props}
      title="加載更多"
      onMouseDown={() => {
        console.log("mouseover");
      }}
    ></BsChevronDoubleDown>
  );
};
export default LoadmoreIcon;
