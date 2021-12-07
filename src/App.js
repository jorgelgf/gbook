import React from "react";
import "./App.css";
import styled from "styled-components";
import Find from "./components/Find/Find";
function App() {
  return (
    <DivFull>
      <DivOpacity>
        <Find />
      </DivOpacity>
    </DivFull>
  );
}
const DivFull = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: auto;
  height: 1200px;
`;
const DivOpacity = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;
export default App;
