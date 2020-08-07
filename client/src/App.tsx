import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";
import store from "./redux/store";
import Spinner from "./portal/Spinner";
import { OffSetContextProvider } from "./Context/storeOffset";
import LogoutButton from "./Components/LogoutButton";
import AlertMessage from "./Components/AlertMessage";
import ErrorBoundary from "./Components/ErrorBoundary";
import axios from "axios";
import FallBackSpinner from "./Components/FallBackSpinner";

const HomePage = lazy(() => import("./Container/HomePage"));
const PortfolioPage = lazy(() => import("./Container/PortfolioPage"));

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

  return (
    <OffSetContextProvider>
      <AlertMessage />
      <LogoutButton />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<FallBackSpinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/port/:id" component={PortfolioPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Spinner isLoading={loading} />
    </OffSetContextProvider>
  );
};

export default App;
