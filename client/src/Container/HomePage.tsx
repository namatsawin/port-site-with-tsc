import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import AuthButton from "../Components/AuthButton";
import { MyReducers } from "../redux/rootReducer";

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
      {currentUser ? <h1>Logged In</h1> : <AuthButton />}
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
