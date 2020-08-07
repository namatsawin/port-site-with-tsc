import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import AuthButton from "../Components/AuthButton";
import { MyReducers } from "../redux/rootReducer";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LinkNoneStyle from "../Components/utilsComponents/LinkNoneStyle";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

const Home = ({ currentUser, ports }: Props): React.ReactElement => {
  const history = useHistory();
  const handleChange = (event: any, values: any) => {
    history.push(`/port/${values.handlePath}`);
  };

  useEffect(() => {
    const path = window.location.search.slice(1);
    if (ports.find((p) => p.handlePath === path)) {
      history.push(`/port/${path}`);
    }
  }, [ports]);

  return (
    <HomeContainer>
      <div
        style={{ display: "grid", gridTemplateColumns: "auto", gridGap: 10 }}
      >
        {currentUser ? (
          <div style={{ margin: "auto" }}>
            <LinkNoneStyle to={`/port/${currentUser.username}`}>
              <Button variant="contained" color="secondary" size="large">
                Go to my port
              </Button>
            </LinkNoneStyle>
          </div>
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
          <Autocomplete
            options={ports}
            getOptionLabel={(option) => option.handlePath}
            style={{ width: 250 }}
            size="small"
            onChange={handleChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Portfolio path name"
                variant="outlined"
                onChange={(e) => console.log(e.target.value)}
              />
            )}
          />
        </div>
      </div>
    </HomeContainer>
  );
};

const mapStateToProps = (state: MyReducers) => ({
  currentUser: state.userReducer.currentUser,
  ports: state.portReducer.ports,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(Home);
