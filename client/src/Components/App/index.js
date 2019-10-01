import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./style.css";
import Navbar from "../Navbar/index";
import Landing from "../Landing/index";

import store from "../../store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/signin" component={Landing} />
        <Route exact path="/breweries" component="" />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
