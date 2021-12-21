import React from "react";
import styled from "styled-components";
import Find from "../Find/Find";
import { Link } from "react-router-dom";
import remove from "../../img/remove.png";
import favo from "../../img/favo.png";

const Home = () => {
  //const navigate = useNavigate();

  //const handleClick = () => navigate("/favorites");
  return (
    <div>
      <DivFull>
        <DivInter>
          <MenuBar>
            <ButtonFavor
              onClick={() => localStorage.clear()}
              style={{
                textDecoration: "none",
                color: "#7F7F87",
                fontSize: "14px",
              }}
            >
              <ImgRemoveFavor src={remove} alt="remove favorites" /> Remove
              favorites
            </ButtonFavor>
            <Link
              to="/favorites"
              style={{
                textDecoration: "none",
                color: "#7F7F87",
                fontSize: "14px",
              }}
            >
              <ImgRemoveFavor src={favo} alt="favorites" />
              My favorites
            </Link>
          </MenuBar>
          <Find />
        </DivInter>
      </DivFull>
    </div>
  );
};

const DivFull = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 100vh;
`;
const DivInter = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  background-position: center;
  background-size: bottom;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  border-radius: 20px;
`;
const MenuBar = styled.div`
  margin: 50px auto 0 auto;
  display: flex;
  //border: solid black 1px;
  width: 60%;
  justify-content: space-between;
  border-radius: 10px;
`;
const ButtonFavor = styled.button`
  width: 160px;
  font-size: 12px;
  color: black;
  background: transparent;
  border: transparent;
  color: #2222222;
  text-shadow: 0 0 2em #0a0a0af4;
  :hover {
    border-color: #e26262;
    color: #200707;
    text-shadow: none;
  }
`;

const ImgRemoveFavor = styled.img`
  width: 15px;
`;
export default Home;
