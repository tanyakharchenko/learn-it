import React from "react";
import { Switch, Route } from "react-router-dom";
import { mockRegularUser, mockAuthorUser } from "mocks/user";
import { useRouteMatch } from "react-router-dom";
import { AsideMenu } from "./components/AsideMenu";
import { Profile } from "./components/Profile";
import { MyLearning } from "./components/MyLearning";
import {
  learningProfileRoute,
  coursesProfileRoute,
  studentsProfileRoute,
  purchasesProfileRoute,
} from "./constants";

export const PrivateProfile = () => {
  const user = mockAuthorUser; // тут запрос на информацию /users/me
  const match = useRouteMatch();

  const learningProfileURL = `${match.url}${learningProfileRoute}`;
  const coursesProfileURL = `${match.url}${coursesProfileRoute}`;
  const studentsProfileURL = `${match.url}${studentsProfileRoute}`;
  const purchasesProfileURL = `${match.url}${purchasesProfileRoute}`;

  return (
    <>
      <AsideMenu
        role={user.role}
        myProfileURL={match.url}
        learningProfileURL={learningProfileURL}
        coursesProfileURL={coursesProfileURL}
        studentsProfileURL={studentsProfileURL}
        purchasesProfileURL={purchasesProfileURL}
      />
      <Switch>
        <Route path={match.url} exact>
          <Profile user={user} />
        </Route>
        <Route path={learningProfileURL} exact>
          <MyLearning inProgressCourses={user.inProgressCourses} plannedCourses={user.plannedCourses} finishedCourses={user.finishedCourses} />
        </Route>
      </Switch>
    </>
  );
};
