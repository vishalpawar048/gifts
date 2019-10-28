import React from "react";
import "./App.css";

import Home from "./pages/Home";
//import Rooms from "./pages/Rooms";
import ForHim from "./pages/ForHim";
import ForHer from "./pages/ForHer";

import SingleGift from "./pages/SingleGift";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ForHim/" component={ForHim} />
        <Route exact path="/ForHer/" component={ForHer} />
        <Route exact path="/ForHim/:slug" component={SingleGift} />
        <Route exact path="/ForHer/:slug" component={SingleGift} />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
