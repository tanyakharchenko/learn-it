import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "components/ui/TextField";
import Typography from "components/ui/Typography";
import Modal from "components/ui/Modal";
import Button from "components/ui/Button";
import CloseIcon from "components/icons/Close";
import * as Styled from "./RegistrationForm.styled";

interface OwnProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationForm: React.FC<OwnProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal open={isOpen}>
      <Styled.Form>
        <Styled.CloseButton onClick={onClose}>
          <CloseIcon />
        </Styled.CloseButton>
        <Typography textAlign="center" variant="h5">
          {t("authentication.loginHi")}
        </Typography>
        <TextField
          type="email"
          variant="standard"
          label={t("authentication.email")}
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          variant="standard"
          label={t("authentication.password")}
          fullWidth
          margin="normal"
        />
        <Button variant="text" sx={{ textTransform: "none" }}>
          {t("authentication.forgetPassword")}
        </Button>
        <Button variant="contained" fullWidth sx={{ marginTop: "1rem" }}>
          {t("authentication.login")}
        </Button>
      </Styled.Form>
    </Modal>
  );
};
