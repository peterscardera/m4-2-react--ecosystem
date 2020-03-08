import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";
import SellerList from "./SellerList";
import GlobalStyles from "./GlobalStlyles";
import SellerDetails from "./SellerDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/items/:itemId">
          <ItemDetails />
        </Route>
        <Route exact path="/sellers">
          <SellerList list={props.sellers} />{" "}
          {/* is this ok? or should i import instead on the sellers js page */}
        </Route>
        <Route exact path="/sellers/:sellerId">
          <SellerDetails />
        </Route>
      </Switch>
      <GlobalStyles />
    </Router>
  );
}

export default App;
