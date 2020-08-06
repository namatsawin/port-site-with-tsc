import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import AuthButton from "../Components/AuthButton";
import { MyReducers } from "../redux/rootReducer";
import { Button } from "@material-ui/core";
import LinkNoneStyle from "../Components/utilsComponents/LinkNoneStyle";

const HomeContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  background-image: url("/images/BackgroundHex.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  place-items: center;
`;

const Home = ({ currentUser }: Props): React.ReactElement => {
  return (
    <HomeContainer>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto", gridGap: 10 }}
      >
        {currentUser ? (
          <div style={{ margin: "auto" }}>
            <LinkNoneStyle to={`/${currentUser.username}`}>
              <Button variant="contained" color="secondary" size="large">
                Go to my port
              </Button>
            </LinkNoneStyle>
          </div>
        ) : (
          <AuthButton />
        )}
      </div>
    </HomeContainer>
  );
};

const mapStateToProps = (state: MyReducers) => ({
  currentUser: state.userReducer.currentUser,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(Home);
