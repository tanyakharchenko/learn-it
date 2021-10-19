import React from "react";
import { useTranslation } from "react-i18next";
import { RegularUser } from "types/User";
import Avatar from "components/ui/Avatar";
import TextField from "components/ui/TextField";
import Button from "components/ui/Button";
import { PrivateProfileWrapper } from "../../PrivateProfile.styled";
import * as Styled from "./Profile.styled";

interface OwnProps {
  user: RegularUser;
}

export const Profile: React.FC<OwnProps> = ({ user }) => {
  const { t } = useTranslation();
  const [isEditMode, setIsEditMode] = React.useState(false);

  return (
    <PrivateProfileWrapper>
      <Styled.Top>
        <Styled.AvatarBlock>
          <Avatar src={user.avatarUrl} sx={{ width: 200, height: 200 }} />
          {isEditMode && <TextField type="file" fullWidth sx={{marginTop: '1rem'}} />}
        </Styled.AvatarBlock>
        <Styled.TextBlock>
          <TextField
            value={user.fullName}
            label={t("privateProfile.fullName")}
            margin="dense"
            fullWidth
            disabled={!isEditMode}
          />
          <TextField
            value={user.userName}
            label={t("privateProfile.nickName")}
            margin="dense"
            fullWidth
            disabled={!isEditMode}
          />
          <TextField
            value={user.description}
            label={t("privateProfile.description")}
            margin="dense"
            fullWidth
            multiline
            disabled={!isEditMode}
          />
          <TextField
            value={user.instagramLink}
            label={t("privateProfile.instagramLink")}
            margin="dense"
            fullWidth
            disabled={!isEditMode}
          />
        </Styled.TextBlock>
        {isEditMode ? (
          <Styled.SaveCancelButtons>
            <Button onClick={() => setIsEditMode(false)} variant="contained">
              {t("general.save")}
            </Button>
            <Button
              onClick={() => setIsEditMode(false)}
              variant="contained"
              sx={{ marginLeft: "1rem" }}
              color="secondary"
            >
              {t("general.cancel")}
            </Button>
          </Styled.SaveCancelButtons>
        ) : (
          <Button
            onClick={() => setIsEditMode(true)}
            variant="contained"
            sx={{ marginLeft: "auto" }}
          >
            {t("general.edit")}
          </Button>
        )}
      </Styled.Top>
    </PrivateProfileWrapper>
  );
};
