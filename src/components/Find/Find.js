import { Fragment, useState } from "react";
import Api from "../Api/Api";
import styled from "styled-components";
import Card from "../Card/Card";
import notfound from "../../img/notfound.png";

export default function Find() {
  const [search, setSearch] = useState(null);

  // let apiKey = "AIzaSyDASQubWULoDxLbr2qhcThaNdLSqKqrx4Y";
  const { book, request } = Api();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      //  if (filterValue.length > 1 && filterValue !== null && filterValue !== "")

      await request(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
    } catch (e) {
      console.log(
        "Você precisa digitar algo \nAbaixo o código do erro gerado: \n",
        e
      );
    }
  }

  return (
    <>
      <OpacityDiv>
        <Title>
          <label htmlFor="search">BOOK SEARCH</label>
        </Title>
        <br />
        <form onSubmit={handleSubmit}>
          <DivInputButton>
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
            <ButtonStyle>SEARCH</ButtonStyle>
          </DivInputButton>
        </form>
      </OpacityDiv>
      <GridDiv>
        {book
          ? book.map((e, i) => {
              return (
                <DivImg key={i}>
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
                    title={e.volumeInfo.title}
                    description={e.volumeInfo.description}
                    authors={e.volumeInfo.authors}
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
                </DivImg>
              );
            })
          : null}
      </GridDiv>
    </>
  );
}

const OpacityDiv = styled.div`
  background-color: #222222;
  color: white;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin-bottom: 5%;
  font-size: 40px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

const DivInputButton = styled.div`
  //border: solid red 10px;
  display: flex;
  justify-content: center;
  margin: 30px;
  padding: 0;
`;
const ButtonStyle = styled.button`
  background: white;
  color: #222222;
  height: 50px;
  border-radius: 0 10px 10px 0;
  border: 10px solid white;
  :hover {
    background: #e26262;
    border-color: #e26262;
    color: white;
  }
`;
const GridDiv = styled.div`
  // max-width: 1200px;
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 30px;
  margin: auto;
  margin-top: 50px;
`;

const DivImg = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }`;
