import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     hovermoving();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [isHover]);
  if (isHover === false) {
    return (
      <CSSTransition
        in={isHover} // 用於判斷是否出現的狀態
        timeout={2000} // 動畫持續時間
        classNames="boss-text" // 防止重複，可以理解成 namespace
      >
        <BsChevronDoubleDown
          style={{ fontSize: "45px" }}
          {...props}
          title="加載更多"
          onMouseEnter={() => {
            setIsHover(true);
          }}
        ></BsChevronDoubleDown>
      </CSSTransition>
    );
  } else {
    return (
      <>
        <CSSTransition
          in={isHover} // 用於判斷是否出現的狀態
          timeout={2000} // 動畫持續時間
          classNames="boss-text" // 防止重複，可以理解成 namespace
        >
          <BsChevronDoubleDown
            style={{ fontSize: "45px", marginTop: "10px" }}
            {...props}
            title="加載更多"
            onMouseLeave={() => {
              setIsHover(false);
            }}
          ></BsChevronDoubleDown>
        </CSSTransition>
      </>
    );
  }
};
export default LoadmoreIcon;
