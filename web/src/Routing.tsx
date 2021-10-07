import React from "react";
import { Switch, Route } from "react-router-dom";
import { CreateCoursePage } from "components/pages/CreateCoursePage";
import { HomePage } from "components/pages/HomePage";
import { PublicProfilePage } from "components/pages/PublicProfilePage";

export const AppRouting = () => {
  return (
    <Switch>
      <Route path="/new-course">
        <CreateCoursePage />
      </Route>
      <Route path="/user/:userId">
        <PublicProfilePage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
