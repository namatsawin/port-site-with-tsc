import React from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import AuthButton from "../Components/AuthButton";
import { MyReducers } from "../redux/rootReducer";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
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
  const [portName, setPortName] = React.useState("");
  const history = useHistory();
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && event.shiftKey) {
      return;
    }
    if (event.key === "Enter" && portName) {
      event.preventDefault();
      history.push(`/${portName}`);
    }
  };
  return (
    <HomeContainer>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto", gridGap: 10 }}
      >
        {currentUser ? (
          <LinkNoneStyle to={`/${currentUser.username}`}>
            <Button variant="contained" color="secondary" size="large">
              Go to my port
            </Button>
          </LinkNoneStyle>
        ) : (
          <AuthButton />
        )}
        <div
          style={{
            background: "rgba(255,255,255,0.4)",
            padding: "0 10px 20px 10px",
            borderRadius: 3,
          }}
        >
          <h4 style={{ textAlign: "center" }}>Search Port</h4>
          <TextField
            variant="outlined"
            size="small"
            autoComplete="off"
            label="Portfolio"
            placeholder="Search port..."
            onChange={(e) => setPortName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
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
