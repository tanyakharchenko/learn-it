import React from "react";
import { useTranslation } from "react-i18next";
import { NewLesson } from "types/course";
import Card from "components/ui/Card";
import Typography from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import PencilIcon from "components/icons/Pencil";
import CloseIcon from "components/icons/Close";

interface OwnProps {
  lesson: NewLesson;
}

export const LessonCard: React.FC<OwnProps> = ({ lesson }) => {
  const { t } = useTranslation();
  const [isControlsShown, setIsControlsShown] = React.useState(false);

  if (!lesson.title) {
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
      <Typography
        sx={{ fontSize: 14, maxWidth: "80%" }}
        color="text.secondary"
        gutterBottom
      >
        {t("general.title")}: {lesson.title}
      </Typography>
      {lesson.description && (
        <Typography
          sx={{ fontSize: 14, maxWidth: "80%" }}
          color="text.secondary"
          gutterBottom
        >
          {t("general.description")}: {lesson.description}
        </Typography>
      )}
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {t("general.order")}{": "}
        {lesson.order}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {t("lessonForm.stepsInTheLesson")}{" "}
        {lesson.steps ? lesson.steps.length : 0}
      </Typography>
    </Card.MaterialCard>
  );
};
