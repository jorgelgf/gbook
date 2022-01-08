import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import rowLeft from "../../../img/rowLeft.png";
import remove from "../../../img/remove.png";
import { useNavigate } from "react-router";
import favo from "../../../img/favo.png";

const Favorites = () => {
  const navigate = useNavigate();

  const bookFavorTitle = Object.keys(localStorage);
  const handleClickRemove = (b) => {
    localStorage.removeItem(b);
    navigate("/favorites");
  };
  return (
    <DivFavor>
      <h1>
        <ImgFavor src={favo} /> Favorite Books <ImgFavor src={favo} />{" "}
      </h1>
      <p>
        <b>Titles</b>
      </p>
      {bookFavorTitle.length !== 0 ? (
        bookFavorTitle.map((b, i) => {
          return (
            <div key={i}>
              <div>
                <p>
                  <LinkBooks href={localStorage.getItem(b)} target="_blank">
                    {b}{" "}
                  </LinkBooks>
                  <ImgRemoveFavor
                    onClick={() => handleClickRemove(b)}
                    src={remove}
                    alt="remove favorite"
                  />
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <H1NoBooks>You don't have any books in favorites</H1NoBooks>
      )}
      <Link
        to="/"
        style={{ textDecoration: "none", color: "#7F7F87", marginTop: "100px" }}
      >
        BACK
        <br />
        <img src={rowLeft} style={{ width: "50px" }} alt="row left to back" />
      </Link>
      <footer style={{ marginTop: "100px" }}>
        OBS: Click on the name to reading
      </footer>
    </DivFavor>
  );
};

const DivFavor = styled.div`
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
`;

const ImgFavor = styled.img`
  width: 40px;
  animation: load 30s linear infinite;

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
const H1NoBooks = styled.p`
  margin: 100px 0 100px 0;
  color: #222222;
  animation: zoom-in-zoom-out 5s ease infinite;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}
`;
const LinkBooks = styled.a`
  text-decoration: none;

  color: inherit;
`;
const ImgRemoveFavor = styled.img`
  width: 15px;
  margin-left: 30px;
  :hover {
    width: 30px;
  }
`;

export default Favorites;
