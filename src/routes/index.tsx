import { Home } from "../pages/Home";
import { FCWithChildren } from "../types/FCWithChildren";

import { Routes as Switch, Route } from "react-router";

export const Routes: FCWithChildren = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Switch>
  );
};
