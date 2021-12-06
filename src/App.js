import React, { useState } from "react";
import "./App.css";

function App() {
  const [book, setBook] = useState(null);
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyDASQubWULoDxLbr2qhcThaNdLSqKqrx4Y"
  );

  function handleChange(event) {
    setBook(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const value = book.trim();
    const filterValue = value.replace(/ +/g, "+");
    console.log(filterValue);

    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${book}:keyes&key=${apiKey}&maxResults=40`
    );
    const json = await response.json();
    setResult([json]);
    console.log(result);
  }
  return (
    <div>
      <h1>SEARCH BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <br />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default App;
