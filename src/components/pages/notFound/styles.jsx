import styled from "styled-components";

export const DivNotFound = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transform: translateY(-20px);
  animation: animeUp 0.4s forwards;

  @keyframes animeUp {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
