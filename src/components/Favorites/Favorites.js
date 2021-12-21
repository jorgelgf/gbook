import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import rowLeft from "../../img/rowLeft.png";

const Favorites = () => {
  const bookFavorTitle = Object.keys(localStorage);
  return (
    <DivFavor>
      {bookFavorTitle.length !== 0 ? (
        bookFavorTitle.map((b, i) => {
          return <h1 key={i}>{b}</h1>;
        })
      ) : (
        <H1NoBooks>You don't have any books in favorites</H1NoBooks>
      )}
      <Link
        to="/search"
        style={{ textDecoration: "none", color: "#7F7F87", marginTop: "100px" }}
      >
        BACK
        <br />
        <img src={rowLeft} style={{ width: "50px" }} alt="row left to back" />
      </Link>
    </DivFavor>
  );
};

const DivFavor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1NoBooks = styled.h1`
  margin: 100px 0 100px 0;
  color: #222222;
`;

export default Favorites;
