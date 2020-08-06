import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";
import store from "./redux/store";
import Spinner from "./portal/Spinner";
import { OffSetContextProvider } from "./Context/storeOffset";
import LogoutButton from "./Components/LogoutButton";
import AlertMessage from "./Components/AlertMessage";
import ErrorBoundary from "./Components/ErrorBoundary";
import HomePage from "./Container/HomePage";
import PortfolioPage from "./Container/PortfolioPage";

const App = (): React.ReactElement => {
  const { data, loading } = useMeQuery();

  React.useEffect(() => {
    if (data) {
      store.dispatch({ type: "SetUser", payload: data.me });
    }
  }, [data]);

  if (!data && !loading && window.location.pathname.includes("/portfolio/")) {
    window.location.href = `https://5f2c27a2b96dd4b505f73601--portfolio-easy.netlify.app/${
      window.location.pathname.split("/")[2]
    }`;
  }
  return (
    <OffSetContextProvider>
      <AlertMessage />
      <LogoutButton />
      <BrowserRouter>
        <Switch>
          <ErrorBoundary>
            <Route exact path="/" component={HomePage} />
            <Route path="/portfolio/:id" component={PortfolioPage} />{" "}
          </ErrorBoundary>
        </Switch>
      </BrowserRouter>
      <Spinner isLoading={loading} />
    </OffSetContextProvider>
  );
};

export default App;
