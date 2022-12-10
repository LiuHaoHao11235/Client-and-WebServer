// import { useParams } from "react-router-dom";
import DetailCard from "../../Common/DetailCard/index";
import styled from "styled-components";
const DetailWarp = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Detail = () => {
  // const { phoneID } = useParams();
  return (
    <DetailWarp>
      <DetailCard></DetailCard>
    </DetailWarp>
  );
};

export default Detail;
