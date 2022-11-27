import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <BsChevronDoubleDown
      style={{ fontsize: "45px", margintop: "10px" }}
      {...props}
      title="加載更多"
      onMouseEnter={() => {
        console.log("mouseEnter");
      }}
    ></BsChevronDoubleDown>
  );
};
export default LoadmoreIcon;
