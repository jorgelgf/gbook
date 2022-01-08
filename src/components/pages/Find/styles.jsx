import styled from "styled-components";

import books from "../../../img/books.jpg";

export const OpacityDiv = styled.div`
  // background-color: #222222;
  background-image: url(${books});
  // color: white;
  background-size: cover;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 30px;

  h1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 5%;
    font-size: 60px;
    color: white;
    text-shadow: 2px 2px black;

    opacity: 1;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    @media (max-width: 400px) {
      font-size: 25px;
    }
  }
`;

export const DivInputButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  padding: 0;
`;
export const ButtonStyle = styled.button`
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
export const GridDiv = styled.div`
  display: grid;
  width: 70%;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 30px;
  margin: auto;
  margin-top: 50px;
`;

export const DivLoading = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: transparent;
  margin: 100px auto;
  color: #222222;
  animation: load 0.5s linear infinite;

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const DivImg = styled.div`
  opacity: 0;
  transform: translateY(-50px);
  animation: animeTop 0.5s forwards;

  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }`;
