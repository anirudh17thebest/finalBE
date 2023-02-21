import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root")
);
