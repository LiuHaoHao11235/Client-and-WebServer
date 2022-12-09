import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { message } from "antd";
export const Favorite = () => {
  const [like, setLike] = useState(false);
  return (
    <div
      onClick={() => {
        setLike((like) => {
          return !like;
        });
        if (!like) {
          message.success({
            type: "success",
            content: "加入到我的最愛",
            duration: 1,
          });
          return;
        }
        message.info({
          type: "info",
          content: "從我的最愛移除",
          duration: 1,
        });
      }}
    >
      {like ? (
        <BsSuitHeartFill
          style={{ fontSize: "25px", color: "red" }}
        ></BsSuitHeartFill>
      ) : (
        <BsSuitHeartFill
          style={{ fontSize: "25px", color: "grey" }}
        ></BsSuitHeartFill>
      )}
    </div>
  );
};
