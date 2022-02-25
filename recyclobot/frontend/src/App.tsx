import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import { Home, Tutorial } from "./pages";
// components
// import { Menu } from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tutorial" exact component={Tutorial} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
