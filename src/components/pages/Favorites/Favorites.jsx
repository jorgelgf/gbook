import React from "react";
import { Link } from "react-router-dom";
import rowLeft from "../../../img/rowLeft.png";
import remove from "../../../img/remove.png";
import { useNavigate } from "react-router";
import favo from "../../../img/favo.png";
import * as S from "./styles";

export default function Favorites() {
  const navigate = useNavigate();

  const bookFavorTitle = Object.keys(localStorage);
  const handleClickRemove = (b) => {
    localStorage.removeItem(b);
    navigate("/favorites");
  };
  return (
    <S.DivFavor>
      <h1>
        <S.ImgFavor src={favo} /> Favorite Books <S.ImgFavor src={favo} />{" "}
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
                  <S.LinkBooks href={localStorage.getItem(b)} target="_blank">
                    {b}{" "}
                  </S.LinkBooks>
                  <S.ImgRemoveFavor
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
        <S.H1NoBooks>You don't have any books in favorites</S.H1NoBooks>
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
    </S.DivFavor>
  );
}
