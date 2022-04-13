import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
// import { persistor, store } from "./store";

const Routes = () => {
  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
    //   </PersistGate>
    // </Provider>
  );
};

export default Routes;
