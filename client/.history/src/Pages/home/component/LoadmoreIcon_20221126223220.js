import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { BsChevronDoubleDown } from "react-icons/bs";
const LoadmoreIcon = (props) => {
  const [isHover, setIsHover] = useState(false);
  if (isHover === false) {
    return (
      <div
        style={{ width: "80px", background: "lightgrey" }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
      >
        <CSSTransition
          in={isHover} // 用於判斷是否出現的狀態
          timeout={2000} // 動畫持續時間
          classNames="boss-text" // 防止重複，可以理解成 namespace
        >
          <BsChevronDoubleDown
            style={{ fontSize: "45px" }}
            {...props}
            title="加載更多"
          ></BsChevronDoubleDown>
        </CSSTransition>
      </div>
    );
  } else {
    return (
      <div
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <CSSTransition
          in={isHover} // 用於判斷是否出現的狀態
          timeout={2000} // 動畫持續時間
          classNames="boss-text" // 防止重複，可以理解成 namespace
        >
          <BsChevronDoubleDown
            style={{ fontSize: "45px", marginTop: "10px" }}
            {...props}
            title="加載更多"
          ></BsChevronDoubleDown>
        </CSSTransition>
      </div>
    );
  }
};
export default LoadmoreIcon;
