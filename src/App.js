import signUp from "./pages/signUp";
import signIn from "./pages/signin";
import header from "./pages/header";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={signUp} exact />
          <Route path="/signin" component={signIn} exact />
          <Route path="/home" component={header} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;



//background-image: url(https://opconventioncenter.com/wp-content/uploads/2018/02/EXPO-Inc.-tools.jpeg);