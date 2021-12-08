import React from "react";
import "./App.css";
import styled from "styled-components";
import Find from "./components/Find/Find";
import bg from "./img/bg.jpg";
import Api from "./components/Api/Api";

function App() {
  const { book } = Api();
  if (book !== null) console.log("dentro do APP: ", book);
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
  border: solid 10px white;
  height: 1200px;
  @media (max-width: 990px) {
    min-height: 700px;
  }
`;
const DivInter = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-size: bottom;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  border-radius: 20px;

  @media (max-width: 1024px) {
    background-size: 10%%;
  }
`;

export default App;
