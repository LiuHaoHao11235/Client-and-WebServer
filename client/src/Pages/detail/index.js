import DetailCard from "../../Common/DetailCard/index";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
const DetailWarp = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Detail = () => {
  const [searchParams] = useSearchParams();
  const PhoneSeries = searchParams.get("productseries");
  const PhoneIndex = searchParams.get("index");
  const TotatalSequence = searchParams.get("totatalsequence");
  return (
    <DetailWarp>
      <DetailCard
        index={PhoneIndex}
        TotatalSequence={TotatalSequence}
        PhoneSeries={PhoneSeries}
      ></DetailCard>
    </DetailWarp>
  );
};

export default Detail;
