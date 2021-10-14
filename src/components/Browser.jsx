// NPM Packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactPage from "../pages/ContactPage";
import CategoryPage from "../pages/CategoryPage";
import MenuPage from "../pages/MenuPage";
import ProductPage from "../pages/ProductPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import EditPage from "../pages/EditPage";

export default function Browser() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route component={MenuPage} path="/menu" />
        <Route component={CategoryPage} path="/category/:categoryId" />
        <Route component={ProductPage} path="/dish/:dishId" />
        <Route component={HomePage} exact path="/" />
        <Route component={ContactPage} path="/contact" />
        <Route component={AdminPage} path="/admin" />
        <Route component={EditPage} path="/edit/:id" />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}