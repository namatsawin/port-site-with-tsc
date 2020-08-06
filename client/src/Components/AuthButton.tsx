import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ButtonLogin = styled(Button)`
  display: flex !important;
  justify-content: space-between !important;
  padding: 0px 5px !important;
  width: 220px;
  background-color: #4285f4 !important;
  margin:auto;
`;

const ButtonIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: #fff;
`;

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonText = styled.p`
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.2px;
`;

const AuthButton = (): React.ReactElement => {
  return (
   
    <a href="/auth/google" style={{ textDecoration: "none" }}>
      <ButtonLogin variant="contained">
        <ButtonIconWrapper>
          <ButtonIcon src="/images/GoogleLogo.svg" />
        </ButtonIconWrapper>
        <ButtonText>Login with Button</ButtonText>
      </ButtonLogin>
    </a>
  );
};

export default AuthButton;
