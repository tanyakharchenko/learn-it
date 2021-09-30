import React from "react";
import { useTranslation } from "react-i18next";
import { NewModule } from "types/course";
import Card from "components/ui/Card";
import Typography from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import PencilIcon from "components/icons/Pencil";
import CloseIcon from "components/icons/Close";

interface OwnProps {
  module: NewModule;
}

export const ModuleCard: React.FC<OwnProps> = ({ module }) => {
  const { t } = useTranslation();
  const [isControlsShown, setIsControlsShown] = React.useState(false);

  if (!module.title) {
    return null;
  }

  const showControls = () => {
    setIsControlsShown(true);
  };

  const hideControls = () => {
    setIsControlsShown(false);
  };

  return (
    <Card.MaterialCard
      sx={{ marginTop: "1rem", position: "relative", padding: "1rem" }}
      onMouseEnter={showControls}
      onMouseLeave={hideControls}
    >
      {isControlsShown && (
        <Card.CardActions sx={{ position: "absolute", right: "0", top: "0" }}>
          <IconButton>
            <PencilIcon color="primary" />
          </IconButton>
          <IconButton>
            <CloseIcon color="secondary" />
          </IconButton>
        </Card.CardActions>
      )}
      <Typography gutterBottom>{module.title}</Typography>
      {module.description && (
        <Typography
          sx={{ fontSize: 14, maxWidth: "80%" }}
          color="text.secondary"
          gutterBottom
        >
          {module.description}
        </Typography>
      )}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {t("general.order")}
        {": "}
        {module.order}
      </Typography>
      {module.lessons && <Typography>{t("general.lessons")}: </Typography>}
      {module.lessons?.map((lesson) => (
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {lesson.title}
        </Typography>
      ))}
    </Card.MaterialCard>
  );
};