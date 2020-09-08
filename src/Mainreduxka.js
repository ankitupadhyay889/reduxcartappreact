import React from "react";
import "./App.css";

import Homecontainer from "./containers/Homecontainer";
import Headercontainer from "./containers/Headercontainer";

const Mainreduxka = () => {
  return (
    <div className="App">
      <Headercontainer />

      <Homecontainer />
    </div>
  );
};

export default Mainreduxka;
