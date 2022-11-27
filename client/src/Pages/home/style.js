import styled from "styled-components";
export const HomeWrapper = styled.div`
  width: 100%;
  margin: 50px auto;
  height: 300px;
  /* background-color: red; */
`;
export const HomeBannerSection = styled.div`
  width: 1800px;
  margin: 0px auto;
  height: 450px;
  display: flex;
  justify-content: space-evenly;
  /* background-color: white; */
`;
export const MainInfoSection = styled.div`
  position: relative;
  width: 1320px;
  margin: 50px;
  height: 200px;
  border: 5px rgba(0, 0, 0, 0.3) double;
  border-radius: 10px;
`;
export const MainCommoditySection = styled.div`
  position: relative;
  width: 1320px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MainHomeBanner = styled.div`
  width: 1400px;
  height: 450px;
  background-color: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.6);
`;
export const SubHomeBanner = styled.div`
  width: 400px;
  height: 1500px;
  margin-left: 100px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;
export const Slideul = styled.ul`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  /* background-color: gray; */
  &.sildes {
    display: block;
    position: relative;
    width: 800px;
    height: 500px;
    list-style: none;
    margin: 0;
    padding: 0;
    /* background-color: gray; */
  }
`;
export const Slideli = styled.li`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(0, 0);
  &.slide {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.slide:nth-of-type(1) {
  }
  &.slide:nth-of-type(2) {
    left: 100%;
  }
  &.slide:nth-of-type(3) {
    left: 200%;
  }
  &.slide:nth-of-type(4) {
    left: 300%;
  }
  &.slide:nth-of-type(5) {
    left: 400%;
  }
`;
export const Radio = styled.input.attrs({ type: "radio" })`
  position: relative;
`;
export const RadioController = styled.label`
  width: 15px;
  height: 15px;
  display: inline-block;
  background-color: white;
  margin: 10px;
  border-radius: 50%;
  background-color: lightblue;
  &.checked {
    background-color: #00a0e9;
  }
`;
export const RadioGroup = styled.div`
  display: none;
`;
export const SlideItemsGroup = styled.div``;
export const SlideControllerGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  text-align: center;
  justify-content: center;
`;
export const MainInfoTitle = styled.div`
  width: 100%;
  position: absolute;
  height: 50px;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  border-bottom: 2px gray dotted;
  color: red;
`;
export const MainInfoItemWrap = styled.div`
  width: 100%;
  height: 150px;
  top: 50px;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;
export const MainInfoItem = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  width: 100px;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  color: rgb(0, 0, 0, 0.7);
  background-color: rgb(128, 128, 128, 0.1);
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    background-color: #b90b26;
    color: white;
    cursor: pointer;
  }
`;
export const Commodity = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px #d3d3d3 solid;
  display: flex;
`;
export const CommodityTitle = styled.div`
  width: 50%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const CommodityInfo = styled.div`
  width: 50%;
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Commodityprize = styled.div`
  width: 50%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const JumpTo = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 30px;
  bottom: 80px;
  width: 60px;
  height: 60px;
  border-radius: 6px;
  background-color: aqua;
  overflow: hidden;
`;
