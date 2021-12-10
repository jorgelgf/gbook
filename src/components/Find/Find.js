import { Fragment, useState } from "react";
import Api from "../Api/Api";
import { Button, Input } from "@mui/material";
import styled from "styled-components";
import Card from "../Card/Card";

export default function Find() {
  const [search, setSearch] = useState(null);

  let apiKey = "AIzaSyDASQubWULoDxLbr2qhcThaNdLSqKqrx4Y";
  const { book, request } = Api();
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      //  if (filterValue.length > 1 && filterValue !== null && filterValue !== "")
      if (search.length > 1)
        await request(
          `https://www.googleapis.com/books/v1/volumes?q=${search}:keyes&key=${apiKey}`
        );
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
        <Title>SEARCH BOOK</Title>
        <br />
        <form onSubmit={handleSubmit}>
          <Input
            type="search"
            onChange={handleChange}
            style={{
              paddingLeft: "10px",
              marginBottom: "10px",
              fontSize: "24px",
              border: "0px",
              color: "white",
              borderBottom: "white",
              maxWidth: "50%",
            }}
          />
          <br />

          <Button
            variant="contained"
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "white",
              marginBottom: "10px",
              color: "black",
            }}
          >
            Search
          </Button>
        </form>
      </OpacityDiv>
      <GridDiv>
        {book &&
          book.map((items, index) => (
            <DivImg key={index}>
              {items.volumeInfo.imageLinks.thumbnail ? (
                <>
                  <img
                    style={{
                      width: "120px",
                      height: "150px",
                      borderRadius: "10px",
                      boxShadow: "0 0 1em #3d3a3a8a",
                    }}
                    src={
                      items.volumeInfo.imageLinks.thumbnail
                        ? items.volumeInfo.imageLinks.thumbnail
                        : "items.volumeInfo.imageLinks.thumbnail"
                    }
                    alt={
                      items.volumeInfo.title === undefined
                        ? ""
                        : items.volumeInfo.title
                    }
                  />
                  <Card
                    title={items.volumeInfo.title}
                    description={items.volumeInfo.description}
                  />
                </>
              ) : (
                <p>deu rui ;t</p>
              )}
            </DivImg>
          ))}
      </GridDiv>
    </>
  );
}

const OpacityDiv = styled.div`
  background-color: #080808;
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
const DivImg = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }`;

const GridDiv = styled.div`
  // max-width: 1200px;
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 30px;
  margin: auto;
`;

/*
   <Card
                    title={items.volumeInfo.title}
                    description={items.volumeInfo.description}
                  />
*/
