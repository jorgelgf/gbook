import React from "react";
import styled from "styled-components";
import Find from "../Find/Find";

const Home = () => {
  return (
    <div>
      <DivFull>
        <DivInter>
          <MenuBar>
            {" "}
            <ButtonFavor onClick={() => localStorage.clear()}>
              CLEAR ALL FAVORITES
            </ButtonFavor>
            <ButtonFavor>MY FAVORITES</ButtonFavor>
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
  width: 20%;
  justify-content: space-between;
  border-radius: 10px;
`;
const ButtonFavor = styled.button`
  width: 160px;
  font-size: 12px;
  color: black;
  background: transparent;
  border: transparent;
  color: #2222222;
  text-shadow: 0 0 2em #0a0a0af4;
  :hover {
    border-color: #e26262;
    color: #200707;
    text-shadow: none;
  }
`;

export default Home;
