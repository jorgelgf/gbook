import styled from "styled-components";

export const DivFull = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 100vh;
  transform: translateX(-20px);
  animation: animeLeft 0.4s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
export const DivInter = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-position: center;
  background-size: bottom;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  border-radius: 20px;
`;
export const MenuBar = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  width: 70%;
  justify-content: flex-end;
  border-radius: 10px;
`;
