import React from "react";
import { Switch, Route } from "react-router-dom";
import { CreateCoursePage } from "components/pages/CreateCoursePage";
import { HomePage } from "components/pages/HomePage";
import { PublicProfilePage } from "components/pages/PublicProfilePage";
import { PublicCoursePage } from "components/pages/PublicCoursePage";
import { PrivateProfilePage } from "components/pages/PrivateProfilePage";

export const AppRouting = () => {
  return (
    <Switch>
      <Route path="/new-course">
        <CreateCoursePage />
      </Route>
      <Route path="/user/:userId">
        <PublicProfilePage />
      </Route>
      <Route path="/course/:courseId">
        <PublicCoursePage />
      </Route>
      <Route path="/my-profile">
        <PrivateProfilePage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
