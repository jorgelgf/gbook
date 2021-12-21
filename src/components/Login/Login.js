import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    //console.log(response);
    // console.log(response.tokenId);
    navigate("/search");
  };

  return (
    <DivLogin>
      <GoogleLogin
        clientId="102077983575-he8108hse3fcjeh1pf27qulvpn9jul72.apps.googleusercontent.com"
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      <br />
      <p>
        <Link to="search" style={{ textDecoration: "none", color: "#7F7F87" }}>
          Continue without Google
        </Link>
      </p>
    </DivLogin>
  );
};

export default Login;

const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  align-items: center;
  flex-direction: column;
`;
