import SignUp from "./pages/signUp";
import signIn from "./pages/signin";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Route path="/" component={SignUp} exact />
          <Route path="/signin" component={signIn} exact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
