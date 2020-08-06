import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { useMeQuery } from "./generated/graphql";
import store from "./redux/store";
import Spinner from "./portal/Spinner";
import { OffSetContextProvider } from "./Context/storeOffset";
import LogoutButton from "./Components/LogoutButton";
import AlertMessage from "./Components/AlertMessage";
import FallBacSpinner from "./Components/FallBackSpinner";
import ErrorBoundary from "./Components/ErrorBoundary";

const HomePage = lazy(() => import("./Container/HomePage"));
const PortfolioPage = lazy(() => import("./Container/PortfolioPage"));

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
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<FallBacSpinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/portfolio/:id" component={PortfolioPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
      <Spinner isLoading={loading} />
    </OffSetContextProvider>
  );
};

export default App;
