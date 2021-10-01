import React from "react";
import { Switch, Route } from "react-router-dom";
import { CreateCoursePage } from "components/pages/CreateCoursePage";
import { HomePage } from "components/pages/HomePage";

export const AppRouting = () => {
  return (
    <Switch>
      <Route path="/new-course">
        <CreateCoursePage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
