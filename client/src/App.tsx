import React from "react";
import { Route, Switch } from "react-router-dom";
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

axios
  .get("/api/portfolios")
  .then((res) => {
    store.dispatch({ type: "SetPorts", payload: res.data });
  })
  .catch((err) => console.error(err));

const App = (): React.ReactElement => {
  const { data, loading } = useMeQuery();

  React.useEffect(() => {
    if (data) {
      store.dispatch({ type: "SetUser", payload: data.me });
    }
  }, [data]);

  if (loading) return <Spinner isLoading={loading} />;
  return (
    <OffSetContextProvider>
      <AlertMessage />
      <LogoutButton />
      <Switch>
        <ErrorBoundary>
          <Route exact path="/" component={HomePage} />
          <Route path="/port/:id" component={PortfolioPage} />{" "}
        </ErrorBoundary>
      </Switch>
    </OffSetContextProvider>
  );
};

export default App;
