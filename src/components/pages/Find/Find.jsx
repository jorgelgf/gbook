import { useState } from "react";
import Api from "../../Service/fetch/Api";
import Card from "../../Card/Card";
import notfound from "../../../img/notfound.png";
import * as S from "./styles";

export default function Find() {
  const [search, setSearch] = useState(null);

  const { book, request, loading } = Api();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await request(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40`
      );
    } catch (e) {
      console.log(
        "Você precisa digitar algo \nAbaixo o código do erro gerado: \n",
        e
      );
    }
  }
  if (loading)
    return (
      <>
        <S.OpacityDiv>
          {" "}
          <h1>
            <label htmlFor="search">BOOK SEARCH</label>
          </h1>
        </S.OpacityDiv>
        <S.DivLoading></S.DivLoading>
      </>
    );
  return (
    <>
      <S.OpacityDiv>
        <h1>
          <label htmlFor="search">BOOK SEARCH</label>
        </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <S.DivInputButton>
            <input
              type="search"
              name="search"
              id="search"
              onChange={handleChange}
              style={{
                border: "1px solid white",
                paddingLeft: "10px",
                fontSize: "24px",
                color: "#222222",
                width: "80%",
                height: "50px",
                backgroundColor: "white",
                borderRadius: "10px 0 0 10px",
                outline: "0",
              }}
            />
            <S.ButtonStyle>SEARCH</S.ButtonStyle>
          </S.DivInputButton>
        </form>
      </S.OpacityDiv>
      <S.GridDiv>
        {book
          ? book.map((e, i) => {
              return (
                <S.DivImg key={i}>
                  <img
                    style={{
                      width: "120px",
                      height: "150px",
                      borderRadius: "10px",
                      boxShadow: "0 0 1em #3d3a3a8a",
                    }}
                    src={
                      e.volumeInfo.imageLinks
                        ? e.volumeInfo.imageLinks.smallThumbnail
                        : notfound
                    }
                    alt=""
                  />
                  <Card
                    title={
                      e.volumeInfo.title ? e.volumeInfo.title : " Without title"
                    }
                    description={
                      e.volumeInfo.description
                        ? e.volumeInfo.description
                        : " Without description"
                    }
                    authors={
                      e.volumeInfo.authors
                        ? e.volumeInfo.authors
                        : " Without authors"
                    }
                    date={
                      e.volumeInfo.publishedDate
                        ? e.volumeInfo.publishedDate
                        : " Without date"
                    }
                    read={
                      e.volumeInfo.previewLink ? e.volumeInfo.previewLink : "#"
                    }
                    img={
                      e.volumeInfo.imageLinks
                        ? e.volumeInfo.imageLinks.smallThumbnail
                        : notfound
                    }
                  />
                </S.DivImg>
              );
            })
          : null}
      </S.GridDiv>
    </>
  );
}
