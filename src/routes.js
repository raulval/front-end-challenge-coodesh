import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";
import store from "./store";

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" element={<Home />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
