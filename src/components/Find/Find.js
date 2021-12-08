import { Fragment, useState } from "react";
import Api from "../Api/Api";
import { Button, Input } from "@mui/material";
import styled from "styled-components";

const Find = () => {
  const [search, setSearch] = useState(null);
  /*
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
*/
  let apiKey = "AIzaSyDASQubWULoDxLbr2qhcThaNdLSqKqrx4Y";

  let filterValue = "";
  const { book, request } = Api();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      filterValue = search.trim().replace(/ +/g, "+");

      await request(
        `https://www.googleapis.com/books/v1/volumes?q=${filterValue}:keyes&key=${apiKey}`
      );
    } catch (e) {
      console.log(
        "Você precisa digitar algo \nAbaixo o código do erro gerado: \n",
        e
      );
    }
    /*
    setTimeout(() => {
      console.log("dentro de find", book);
      console.log("erro: ", error);
    }, 8000);
    */
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
            size="small"
            style={{
              paddingLeft: "5px",
              maxWidth: "70%",
              marginBottom: "10px",
              fontSize: "24px",
              textAlign: "center",
              border: "0px",
            }}
          />
          <br />

          <Button
            variant="contained"
            type="submit"
            style={{
              marginLeft: "10px",
              backgroundColor: "black",
              marginBottom: "10px",
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
                <img
                  style={{
                    width: "120px",
                    height: "150px",
                    borderRadius: "10px",
                    boxShadow: "0 0 2em black",
                  }}
                  src={
                    items.volumeInfo.imageLinks === undefined || "" || null
                      ? ""
                      : items.volumeInfo.imageLinks.thumbnail
                  }
                  alt={
                    items.volumeInfo.title === undefined
                      ? ""
                      : items.volumeInfo.title
                  }
                />
              ) : (
                <p>deu rui</p>
              )}
            </DivImg>
          ))}
      </GridDiv>
    </>
  );
};

const OpacityDiv = styled.div`
  background-color: #f5f0f0b7;
  margin: auto;
  margin-top: 100px;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 10px;
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
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 30px;
  margin: 100px;
`;
/*
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
*/
export default Find;
