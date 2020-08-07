import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import ApolloClient from "apollo-boost";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client as any}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.querySelector("#root")
);

serviceWorker.register();
