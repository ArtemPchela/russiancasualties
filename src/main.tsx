import React from "react";
import { Provider } from "react-redux";
import { store } from "./reduxTK/store";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Analytics />
  </React.StrictMode>,
);
