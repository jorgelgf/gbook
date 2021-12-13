import React from "react";
import styled from "styled-components";
import Find from "./components/Find/Find";
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

  @media (max-width: 1024px) {
    background-size: 10%%;
  }
`;

export default App;
