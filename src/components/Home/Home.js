import React from "react";
import styled from "styled-components";
import Find from "../Find/Find";
import MenuTop from "../Menu/MenuTop";

const Home = () => {
  return (
    <div>
      <DivFull>
        <DivInter>
          <MenuBar>
            <MenuTop />
          </MenuBar>
          <Find />
        </DivInter>
      </DivFull>
    </div>
  );
};

const DivFull = styled.div`
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
`;
const DivInter = styled.div`
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
const MenuBar = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  //border: solid black 1px;
  width: 70%;
  justify-content: flex-end;
  border-radius: 10px;
`;
export default Home;
