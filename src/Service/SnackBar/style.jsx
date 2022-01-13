import styled from "styled-components";

export const DivImageLeft = styled.div`
  img {
    width: 25px;
    height: 25px;
    padding: 0;
    animation: load 30s linear infinite;

    @keyframes load {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const DivImageRight = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 25px;
    height: 25px;
    padding: 0;
    animation: load 30s linear infinite;

    @keyframes load {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
