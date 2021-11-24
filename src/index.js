import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import postsReducer from "./Redux/reducers/postsReducer";
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  postsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
