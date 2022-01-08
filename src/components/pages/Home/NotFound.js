import React from "react";
import styled from "styled-components";
import rowLeft from "../../../img/rowLeft.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <DivNotFound>
      <h1>Error: 404 - Not Found</h1>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#7F7F87", marginTop: "100px" }}
      >
        BACK
        <br />
        <img src={rowLeft} style={{ width: "50px" }} alt="row left to back" />
      </Link>
    </DivNotFound>
  );
};

const DivNotFound = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transform: translateY(-20px);
  animation: animeUp 0.4s forwards;

  @keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
export default NotFound;
