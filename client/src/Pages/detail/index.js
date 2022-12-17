import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import MainSection from "./component/MainSection";

import MoreSection from "./component/MoreSection";
const DetailWarp = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
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
      <MainSection
        index={PhoneIndex}
        TotatalSequence={TotatalSequence}
        PhoneSeries={PhoneSeries}
      ></MainSection>
      <MoreSection></MoreSection>
    </DetailWarp>
  );
};

export default Detail;
