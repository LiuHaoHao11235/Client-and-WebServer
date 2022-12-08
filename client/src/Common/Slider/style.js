import styled from "styled-components";
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
