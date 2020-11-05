import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

//react router
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
