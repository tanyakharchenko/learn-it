import React from "react";
import Avatar from "components/ui/Avatar";
import Typography from "components/ui/Typography";
import Link from "components/ui/Link";
import InstagramIcon from "components/icons/Instagram";
import * as Styled from "./TopInfo.styled";

interface OwnProps {
  userName: string;
  fullName: string;
  description: string;
  instagramLink: string;
  avatarUrl: string;
}

export const TopInfo: React.FC<OwnProps> = ({
  userName,
  fullName,
  description,
  instagramLink,
  avatarUrl,
}) => {
  return (
    <Styled.TopInfoWrapper>
      <Styled.TopInfoTextWrapper>
        <Typography variant="h4">{userName}</Typography>
        <Typography variant="h5" marginTop="1rem">
          {fullName}
        </Typography>
        <Typography variant="body1" marginTop="1rem">
          {description}
        </Typography>
        <Styled.Socials>
          <Link href={instagramLink} target="blank">
            <InstagramIcon fontSize="large" />
          </Link>
        </Styled.Socials>
      </Styled.TopInfoTextWrapper>
      <Styled.AvatarWrapper>
        <Avatar src={avatarUrl} sx={{ width: 256, height: 256 }} />
      </Styled.AvatarWrapper>
    </Styled.TopInfoWrapper>
  );
};
