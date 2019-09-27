import React from "react";
import Navbar from "../Navbar/index";
import Landing from "../Landing/index";
import "./style.css";

// import { Provider } from "react-redux";
// import store from "../../store";

const App = () => {
  return (
    // <Provider store={store}>
    <div>
      <Navbar />
      <Landing />
    </div>
    // </Provider>
  );
};

export default App;
