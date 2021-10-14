import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthorByCourse } from "types/Author";
import Avatar from "components/ui/Avatar";
import Typography from "components/ui/Typography";
import * as Styled from "./AuthorInfo.styled";

interface OwnProps {
  author: AuthorByCourse;
}

export const AuthorInfo: React.FC<OwnProps> = ({ author }) => {
  const { t } = useTranslation();
  return (
    <Styled.Wrapper>
      <Avatar src={author.avatarUrl} sx={{ width: 156, height: 156 }} />
      <Styled.TextBlock>
        <Typography>
          {t("author.courseAuthor")}&nbsp;
          <Link to={`/user/${author.id}`}>{author.fullName}</Link>
        </Typography>
        <Typography marginTop="1rem">
            {author.coursesSelfDescription}
        </Typography>
      </Styled.TextBlock>
    </Styled.Wrapper>
  );
};
