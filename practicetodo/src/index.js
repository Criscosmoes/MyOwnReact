import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducers/index'; 
const store = createStore(reducer, composeWithDevTools())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
