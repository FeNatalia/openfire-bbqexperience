// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Category from "../pages/Category";
import Home from "../pages/Home";
import Dish from "../pages/Dish";
import Navigation from "./Navigation";
import Footer from "./Footer";
import WelcomePage from "../pages/WelcomePage";
import ContactPage from "../pages/ContactPage";

export default function Browser() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Category} path="/category/:categoryId" />
        <Route component={Dish} path="/dish/:dishId" />
        <Route component={WelcomePage} path="/welcome" />
        <Route component={ContactPage} path="/contact" />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}