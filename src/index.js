import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as Sentry from "@sentry/browser";
import * as serviceWorker from "./serviceWorker";
import HelloWorld from "./Hello";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

Sentry.init({
  dsn:
    "https://62678615ce374833b5e26308f49c231b@o390074.ingest.sentry.io/5230857",
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {/* <HelloWorld /> */}
      {/* <Counter /> */}
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
