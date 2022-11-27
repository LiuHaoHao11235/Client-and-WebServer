import { hover } from "@testing-library/user-event/dist/hover";
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <BsChevronDoubleDown
      style={{ fontSize: "45px", marginTop: "10px" }}
      hover={{ color: "red" }}
      {...props}
      title="加載更多"
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
    ></BsChevronDoubleDown>
  );
};
export default LoadmoreIcon;
