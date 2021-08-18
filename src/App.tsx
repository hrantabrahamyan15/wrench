import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { HelmetLayout } from "./layouts";
import { AddressContainer, HomeContainer } from "./containers";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetLayout>
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/address" component={AddressContainer} />
        </Switch>
      </HelmetLayout>
    </BrowserRouter>
  );
};

export default App;
