import React, { useState } from "react";
import "./App.css";
import Api from "./components/Api/Api";
import { Button, Input } from "@mui/material";
import MultiActionAreaCard from "./components/Card/Card";

function App() {
  const [search, setSearch] = useState(null);

  let apiKey = "AIzaSyDASQubWULoDxLbr2qhcThaNdLSqKqrx4Y";

  let filterValue = "search";
  const { book, request } = Api();

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  async function handleSubmit(event) {
    try {
      event.preventDefault();
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
    <div>
      <h1>SEARCH BOOK</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <Input type="search" onChange={handleChange} size="long" />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default App;
