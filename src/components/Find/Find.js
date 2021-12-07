import { useState } from "react";
import Api from "../Api/Api";
import { Button, Input } from "@mui/material";
import styled from "styled-components";

const Find = () => {
  const [search, setSearch] = useState(null);

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
        `https://www.googleapis.com/books/v1/volumes?q=${filterValue}:keyes&key=${apiKey}&maxResults=20`
      );
    } catch (e) {
      console.log(
        "Você precisa digitar algo \nAbaixo o código do erro gerado: \n",
        e
      );
    }
    console.log(book);
  }

  return (
    <OpacityDiv>
      <Title>SEARCH BOOK</Title>
      <br />
      <form onSubmit={handleSubmit}>
        <Input
          type="search"
          fullWidth={true}
          onChange={handleChange}
          size="long"
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
  );
};

const OpacityDiv = styled.div`
  background-color: #f5f0f0b7;
  margin: 100px;
  border-radius: 10px;
  @media (max-width: 400px) {
    width: 200px;
  }
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

export default Find;
