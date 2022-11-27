import { useEffect, useState } from "react";
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
  // if (isHover === false) {
  //   return (
  //     <BsChevronDoubleDown
  //       style={{ fontSize: "45px", marginTop: "10px" }}
  //       {...props}
  //       title="加載更多"
  //       onMouseEnter={() => {
  //         setIsHover(true);
  //         console.log("mouseEnter");
  //       }}
  //     ></BsChevronDoubleDown>
  //   );
  // } else {
  return (
    // <BsChevronDoubleDown
    //   style={{ fontSize: "45px", marginTop: "10px" }}
    //   {...props}
    //   title="加載更多"
    //   onMouseLeave={() => {
    //     setIsHover(true);
    //     console.log("mouseLeave");
    //   }}
    // ></BsChevronDoubleDown>
    <>
      <CSSTransition
        in={isHover} // 用於判斷是否出現的狀態
        timeout={2000} // 動畫持續時間
        classNames="boss-text" // 防止重複，可以理解成 namespace
      >
        <div>BOSS - 風魚</div>
      </CSSTransition>
      <div>
        <button onClick={() => setIsHover(true)}>召喚「風魚」 </button>
      </div>
    </>
  );
};
export default LoadmoreIcon;
