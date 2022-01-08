import styled from "styled-components";

export const ImageFavo = styled.img`
  width: 25px;
  height: 25px;
  padding: 0 0 0 0;
  margin-right: 40px;
  animation: load 30s linear infinite;

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;
