import React from "react";
import styled from "styled-components";
const NotFound = () => {
  return (
    <divNotFound>
      <h1>Error: 404 - Not Found</h1>
    </divNotFound>
  );
};

const divNotFound = styled.div`
  display: flex;
  justify-content: center;
  color: #222222;
`;
export default NotFound;
