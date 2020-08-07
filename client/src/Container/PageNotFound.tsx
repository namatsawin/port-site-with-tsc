import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #f50057;

  &:hover {
    color: #ff4d8c;
  }
`;

const RedirectText = styled.p`
  margin: 5px;
  font-weight: 600;
  transition: all 0.4s ease-out;
  animation: blink-animation 1s infinite ease-out;
  color: #f50057;

  @keyframes blink-animation {
    50% {
      opacity: 0.4;
    }
  }
`;

const PageNotFound = () => {
  const history = useHistory();
  const [show, SetShow] = React.useState(false);

  setTimeout(() => SetShow(true), 5000);
  setTimeout(() => history.push("/"), 10000);

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 10 }}>Oops.</h1>
        <h3 style={{ margin: 10 }}>
          404 Page not found. <LinkStyle to="/">Back to home</LinkStyle>
        </h3>
        {show && <RedirectText>Redirecting to home....</RedirectText>}
      </div>
    </div>
  );
};

export default PageNotFound;
