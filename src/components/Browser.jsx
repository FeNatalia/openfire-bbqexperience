// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Category from "../pages/Category";
import Home from "../pages/Home";
import Dish from "../pages/Dish";

export default function Browser() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Category} path="/category/:categoryId" />
        <Route component={Dish} path="/dish/:dishId" />
      </Switch>
    </BrowserRouter>
  );
}