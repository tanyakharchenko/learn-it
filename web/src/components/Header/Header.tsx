import React from "react";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "components/ui/Button";
import { LoginForm } from "components/LoginForm";
import { RegistrationForm } from "components/RegistrationForm";
import * as Styled from "./Header.styled";

export const Header = () => {
  const { t } = useTranslation();
  const { loginWithRedirect } = useAuth0();
  
  const [isLoginFormOpen, setIsLoginFormOpen] = React.useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = React.useState(false);

  const openLogin = () => {
      setIsLoginFormOpen(true);
  }

  const closeLogin = () => {
    setIsLoginFormOpen(false);
  }

  const openRegistration = () => {
    setIsRegistrationFormOpen(true);
}

const closeRegistration = () => {
    setIsRegistrationFormOpen(false);
}

  return (
    <Styled.Wrapper position="static">
      <Styled.LoginButtons>
        <Button onClick={openLogin}>{t("authentication.login")}</Button>
        <Button onClick={openRegistration} variant="contained" sx={{ marginLeft: "1rem" }}>
          {t("authentication.registration")}
        </Button>
      </Styled.LoginButtons>
      <LoginForm isOpen={isLoginFormOpen} onClose={closeLogin} />
      <RegistrationForm isOpen={isRegistrationFormOpen} onClose={closeRegistration} />
    </Styled.Wrapper>
  );
};
