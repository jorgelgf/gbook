import styled from "styled-components";

import books from "../../../img/books.jpg";

export const DivFullHeader = styled.div`
  background-image: url(${books});
  background-size: cover;
  margin: auto;
  margin-top: 20px;
  border-radius: 10px;
  width: 70%;
  margin-bottom: 30px;
  background-attachment: fixed;

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
    @media (max-width: 450px) {
      font-size: 25px;
    }
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const DivInputButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  padding: 0;

  input {
    border: 1px solid white;
    padding-left: 10px;
    font-size: 24px;
    width: 80%;
    color: #222222;
    height: 50px;
    background-color: white;
    border-radius: 10px 0 0 10px;
    outline: 0;
    text-align: center;
    @media (max-width: 450px) {
      height: 30px;
      font-size: 13px;
      width: 99%;
    }
  }
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
  @media (max-width: 450px) {
    height: 30px;
    font-size: 10px;
    width: 58px;
    border: 1px solid white;
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

  
  img{
  width: 120px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 0 1em #3d3a3a8a;

  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);

  }
  }

  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }`;
