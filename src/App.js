import SignUp from "./pages/signUp";
import SignIn from "./pages/signin";
import header from "./pages/header";
import Product from "./pages/product";
import aboutPage from "./pages/about";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={SignUp} exact />
          <Route path="/SignIn" component={SignIn} exact />
          <Route path="/home" component={header} exact />
          <Route path="/products" component={Product} exact />
          <Route path="/aboutUs" component={aboutPage} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

//background-image: url(https://opconventioncenter.com/wp-content/uploads/2018/02/EXPO-Inc.-tools.jpeg);
