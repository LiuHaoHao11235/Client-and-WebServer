import styled from "styled-components";
import loginBackground from "../../Statices/background.png";
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${loginBackground});
`;
export const LoginSection = styled.div`
  height: 300px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  font-weight: 600;
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
`;
export const LoginSubmit = styled.button`
  width: 120px;
  height: 30px;
  font-size: 16px;
  background-color: #1677ff;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  border: none;
`;
export const RememberSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
