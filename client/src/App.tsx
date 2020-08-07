import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";
import store from "./redux/store";
import Spinner from "./portal/Spinner";
import { OffSetContextProvider } from "./Context/storeOffset";
import LogoutButton from "./Components/LogoutButton";
import AlertMessage from "./Components/AlertMessage";
import ErrorBoundary from "./Components/ErrorBoundary";
import HomePage from "./Container/HomePage";
import PortfolioPage from "./Container/PortfolioPage";
import axios from "axios";
import { MyReducers } from "./redux/rootReducer";
import { connect, ConnectedProps } from "react-redux";

axios
  .get("/api/portfolios")
  .then((res) => {
    store.dispatch({ type: "SetPorts", payload: res.data });
  })
  .catch((err) => console.error(err));

const App = ({ ports }: Props): React.ReactElement => {
  const { data, loading } = useMeQuery();
  const history = useHistory();

  React.useEffect(() => {
    if (data) {
      store.dispatch({ type: "SetUser", payload: data.me });
    }
  }, [data]);

  React.useEffect(() => {
    const path = window.location.pathname.split("/")[1].toLowerCase();
    if (ports.find((p) => p.handlePath.toLowerCase() === path)) {
      history.push(`/portfolio/${path}`);
    }
  }, [ports, history]);

  return (
    <OffSetContextProvider>
      <AlertMessage />
      <LogoutButton />
      <Switch>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
          <Route path="/portfolio/:id" component={PortfolioPage} />{" "}
        </ErrorBoundary>
      </Switch>
      <Spinner isLoading={loading} />
    </OffSetContextProvider>
  );
};

const mapStateToProps = (state: MyReducers) => ({
  ports: state.portReducer.ports,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

export default connector(App);
