import React from "react";
import rowLeft from "../../../img/rowLeft.png";
import { Link } from "react-router-dom";
import * as S from "./styles";
export default function NotFound() {
  return (
    <S.DivNotFound>
      <h1>Error: 404 - Not Found</h1>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#7F7F87", marginTop: "100px" }}
      >
        BACK
        <br />
        <img src={rowLeft} style={{ width: "50px" }} alt="row left to back" />
      </Link>
    </S.DivNotFound>
  );
}
