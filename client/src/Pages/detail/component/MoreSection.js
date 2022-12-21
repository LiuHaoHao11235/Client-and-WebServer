import styled from "styled-components";
import { Card, Space } from "antd";
const SelectButton = styled.button`
  width: 200px;
  height: 60px;
  margin-left: 5px;
  border: 2px lightgray solid;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 600;
  font-size: 24px;
  color: black;
  &:hover {
    background-color: gold;
    color: white;
    border: none;
  }
`;
const WarpSelectButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardTitle = styled.h1`
  font-size: 24px;
  color: red;
  font-weight: 600;
  cursor: default;
`;
const CardInfo = styled.p`
  font-size: 18px;
  color: blue;
  font-weight: 600;
  cursor: default;
`;
const StyleCard = styled(Card)`
  opacity: 0.9;
  &:hover {
    opacity: 1;
    box-shadow: none;
    background-color: rgba(0, 160, 233, 0.2);
  }
`;

const MoreSelector = (props) => {
  return (
    <WarpSelectButton>
      <SelectButton>商品介紹</SelectButton>
      <SelectButton>性能跑分</SelectButton>
      <SelectButton>性能排行</SelectButton>
    </WarpSelectButton>
  );
};
const MoreSection = (props) => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
      }}
    >
      <MoreSelector></MoreSelector>
      <StyleCard
        title={<CardTitle>6.1 吋 OLED 顯示器</CardTitle>}
        size="default"
        hoverable
      >
        <CardInfo>
          Apple iPhone 13 128GB 配置 6.1 吋 2,532 x 1,170pixels 解析度超 Retina
          XDR 顯示器，搭載 OLED 螢幕面板，支援原彩顯示、電影級 P3
          標準廣色域；顯示 HDR 內容時，螢幕亮度最高可達
          1,200nits。另外，隨著螢幕「瀏海」也就是原深感測相機的面積縮小
          20%，相對帶來更為寬廣的視覺體驗。
        </CardInfo>
      </StyleCard>
      <StyleCard
        title={<CardTitle>超瓷晶盾面板</CardTitle>}
        size="large"
        hoverable
      >
        <CardInfo>
          Apple iPhone 13 128GB
          延續高規格的保護力，正面採用超瓷晶盾面板加強機身防護效果，維持平面鋁金屬中框以及玻璃機背設計，擁有
          IP68 防塵防水等級，在最深達 6 公尺的水中最長可達 30
          分鐘。顏色方面，提供粉紅色、藍色、午夜色、星光色、紅色、綠色等 6
          種款式可選。
        </CardInfo>
      </StyleCard>
      <StyleCard
        title={<CardTitle>A15 仿生晶片</CardTitle>}
        size="large"
        hoverable
      >
        <CardInfo>
          Apple iPhone 13 128GB 搭載 A15 仿生晶片，具備全新 16
          核心神經網路引擎，兼顧遊戲效能、手機續航表現；運行 iOS 15
          作業系統，FaceTime
          加入「同播共享」模式，提供滿載強大的功能，以及各式隱私保護設計。支援
          5G 上網，提供 eSIM 服務，具備 Wi-Fi 6、藍牙 5.0、超寬頻、NFC
          讀取等應用。
        </CardInfo>
      </StyleCard>
      <StyleCard
        title={<CardTitle>MagSafe 無線充電</CardTitle>}
        size="large"
        hoverable
      >
        <CardInfo>
          Apple iPhone 13 128GB 具備 Face ID
          功能，可透過原深感測相機進行臉部辨識，提供手機解鎖、身分認證等操作。續航部分，再度強化電池容量與續航能力，影片播放時間最長可達
          19 小時，支援有線快速充電、7.5W Qi 無線充電；內建 MagSafe
          磁石陣列，可提供 15W MagSafe 無線充電功能。
        </CardInfo>
      </StyleCard>
      <StyleCard
        title={<CardTitle>OIS 影像穩定</CardTitle>}
        size="large"
        hoverable
      >
        <CardInfo>
          Apple iPhone 13 128GB 全面強化攝影架構，同時加入新一代感光元件，以及
          OIS 感光元件位移式穩定功能，雙相機系統改採對角排列設計，具備 1,200
          萬畫素廣角鏡頭 + 1,200 萬畫素 120 度超廣角鏡頭，支援智慧型 HDR
          4、人像光線、原彩閃光燈功能。新增「電影級模式」，可自動拍攝淺景深效果影片，支援杜比視界
          HDR 拍攝。
        </CardInfo>
      </StyleCard>
    </Space>
  );
};

export default MoreSection;
