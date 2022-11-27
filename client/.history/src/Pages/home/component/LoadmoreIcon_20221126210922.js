import { useCallback, useEffect, useRef, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const interval = useRef(0);
  useEffect(() => {
    return () => clearInterval(interval);
  }, [isHover]);
  useCallback(() => {
    interval.current = setInterval(() => {
      hovermoving();
    }, 1000);
  }, [isHover]);
  function hovermoving() {
    console.log("moving");
    setIsMoving(!isMoving);
  }
  if (isHover === false) {
    return (
      <BsChevronDoubleDown
        style={{ fontSize: "45px", marginTop: "10px" }}
        {...props}
        title="加載更多"
        onMouseEnter={() => {
          setIsHover(true);
          console.log("mouseEnter");
        }}
      ></BsChevronDoubleDown>
    );
  } else {
    return (
      <BsChevronDoubleDown
        style={{ fontSize: "45px", marginTop: "10px" }}
        {...props}
        title="加載更多"
        onMouseLeave={() => {
          setIsHover(true);
          console.log("mouseLeave");
        }}
      ></BsChevronDoubleDown>
    );
  }
};
export default LoadmoreIcon;
