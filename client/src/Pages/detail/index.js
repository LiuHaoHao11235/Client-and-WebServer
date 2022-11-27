import { useParams } from "react-router-dom";
import { Button as AntButton, message } from "antd";
const Detail = () => {
  const { phoneID } = useParams();
  return (
    <div>
      <AntButton
        type="primary"
        onClick={() => {
          message.success("成功囉");
        }}
      >
        {phoneID}
      </AntButton>
    </div>
  );
};

export default Detail;
