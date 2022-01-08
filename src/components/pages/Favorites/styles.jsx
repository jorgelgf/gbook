import styled from "styled-components";

export const DivFavor = styled.div`
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

export const ImgFavor = styled.img`
  width: 40px;
  animation: load 30s linear infinite;

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
export const H1NoBooks = styled.p`
  margin: 100px 0 100px 0;
  color: #222222;
  animation: zoom-in-zoom-out 5s ease infinite;
}

@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
}
`;
export const LinkBooks = styled.a`
  text-decoration: none;

  color: inherit;
`;
export const ImgRemoveFavor = styled.img`
  width: 15px;
  margin-left: 30px;
  :hover {
    width: 30px;
  }
`;
