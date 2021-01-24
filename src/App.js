import SignUp from "./pages/signUp";
import SignIn from "./pages/signin";
import header from "./pages/header";
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
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

//background-image: url(https://opconventioncenter.com/wp-content/uploads/2018/02/EXPO-Inc.-tools.jpeg);
