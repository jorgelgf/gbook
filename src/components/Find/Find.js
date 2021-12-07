import { useState } from "react";
import Api from "../Api/Api";
import { Button, Input } from "@mui/material";
import styled from "styled-components";
import bg from "../../img/bg.jpg";

const Find = () => {
  const [search, setSearch] = useState(null);

  let apiKey = "AIzaSyDASQubWULoDxLbr2qhcThaNdLSqKqrx4Y";

  let filterValue = "";
  const { book, request } = Api();

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const value = search.trim();
      filterValue = value.replace(/ +/g, "+");
      //console.log(filterValue);
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
    <DivFind>
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
    </DivFind>
  );
};
const DivFind = styled.div`
  display: flex;

  text-align: center;
  flex-direction: column;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const OpacityDiv = styled.div`
  background-color: #f5f0f0b7;
  margin: 100px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  margin-bottom: 5%;
  z-index: 2;
  font-size: 40px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export default Find;
