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
        <Typography textAlign="center" variant="h5" sx={{marginBottom: '1rem'}}>
          {t("authentication.registrationHi")}
        </Typography>
        <TextField
          type="email"
          label={t("authentication.email")}
          fullWidth
          margin="dense"
        />
        <TextField
          label={t("authentication.nickName")}
          fullWidth
          margin="dense"
        />
        <TextField
          type="password"
          label={t("authentication.password")}
          fullWidth
          margin="dense"
        />
        <TextField
          label={t("authentication.linkToInstagram")}
          fullWidth
          margin="dense"
        />
        <Button variant="contained" fullWidth sx={{ marginTop: "2rem" }}>
          {t("authentication.registration")}
        </Button>
      </Styled.Form>
    </Modal>
  );
};
