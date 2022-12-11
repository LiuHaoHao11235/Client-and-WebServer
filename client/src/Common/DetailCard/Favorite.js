import { useState } from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { message } from "antd";
import styled from "styled-components";
const StyleBsSuitHeartFill = styled(BsSuitHeartFill)`
  font-size: 25px;
  color: grey;
  transition: all 0.1s linear;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
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
        <StyleBsSuitHeartFill></StyleBsSuitHeartFill>
      ) : (
        <StyleBsSuitHeartFill></StyleBsSuitHeartFill>
      )}
    </div>
  );
};
