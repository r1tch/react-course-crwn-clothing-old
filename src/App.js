import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route path="/shop/hats" component={HatsPage} />
      <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
