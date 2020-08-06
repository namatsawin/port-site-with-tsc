import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import ApolloClient from "apollo-boost";


const client = new ApolloClient({
  uri: "/graphql",
  credentials: "include",
});

ReactDOM.render(
  <ApolloProvider client={client as any}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.querySelector("#root")
);

serviceWorker.register();
