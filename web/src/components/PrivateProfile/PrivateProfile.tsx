import React from "react";
import { mockAuthorUser } from "mocks/user";
import { AsideMenu } from "./components/AsideMenu";

export const PrivateProfile = () => {
  const user = mockAuthorUser; // тут запрос на информацию /users/me

  return <AsideMenu role={user.role} />;
};
