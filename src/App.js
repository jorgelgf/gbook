import React from "react";
import "./App.css";
import styled from "styled-components";
import Find from "./components/Find/Find";
import bg from "./img/bg.jpg";

function App() {
  return (
    <DivFull>
      <DivInter>
        <Find />
      </DivInter>
    </DivFull>
  );
}
const DivFull = styled.div`
  display: flex;
  justify-content: center;

  width: auto;
  height: 1200px;
`;
const DivInter = styled.div`
  display: flex;

  text-align: center;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export default App;
