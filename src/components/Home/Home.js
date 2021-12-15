import React from "react";
import styled from "styled-components";
import Find from "../Find/Find";
const Home = () => {
  return (
    <div>
      <DivFull>
        <DivInter>
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

export default Home;
