import styled from "styled-components";
import logo from "../../Statices/logo123.png";
export const Headersection = styled.div`
  height: 60px;
  background: #00a0e9;
  position: relative;
  width: 1903px;
`;
export const HeaderWrapper = styled.div`
  height: 60px;
  background: #00a0e9;
  width: 100%;
  z-index: 100;
  padding: 0px 15px;
  position: fixed;
  box-shadow: 0px 0px 6px 0px black;
`;
export const Logo = styled.p`
  height: 60px;
  width: 60px;
  top: 0;
  left: 0;
  display: block;
  position: absolute;
  background: url(${logo});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 1520px;
  height: 100%;
  margin-left: 100px;
  background: #00a0e9;
  display: flex;
  position: relative;
`;
export const Navitem = styled.div`
  width: 160px;
  font-weight: 600;
  padding: 0px 12px;
  height: 100%;
  top: 0;
  font-size: 22px;
  background-color: #00a0e9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  cursor: pointer;
  &.user_title {
    width: 160px;
    color: black;
  }
  &:hover {
    background-color: lightblue;
    color: black;
  }
`;
export const NavUser = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -150px;
`;
export const Searchinfo = styled.div`
  z-index: 1;
  position: absolute;
  height: 200px;
  width: 300px;
  left: 0px;
  top: 60px;
  background-color: rgb(211, 211, 211, 0.9);
  border: 1px #969696 solid;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 3px;
  align-items: center;
`;
export const SearchinfoItem = styled.a`
  display: inline-block;
  font-weight: 300;
  font-size: 10px;
  padding: 5px;
  border: 1px #c9c7c1 solid;
  border-radius: 10px;
  height: 30px;
  color: black;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #969696;
  }
`;
export const Searchsection = styled.div`
  font-weight: 500;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
export const Stargrouper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
`;
export const Reloadsection = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #969696 solid;
  padding: 10px 5px 10px 5px;
`;
export const Navitemaddtional = styled.div`
  z-index: 100;
  top: 60px;
  flex-direction: column;
  display: flex;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  visibility: hidden;
  border-width: 1px 1px 0px 1px;
  border-color: #c9c7c1;
  border-style: solid;
  background-color: #dcdcdc;
  &.overnavitem {
    visibility: visible;
    opacity: 0.9;
  }
`;
export const Additionlink = styled.a`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px #c9c7c1 solid;
  &:hover {
    color: white;
    background-color: #969696;
  }
`;
