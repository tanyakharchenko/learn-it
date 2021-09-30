import React from "react";
import { useTheme } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "store/hooks";
import { newCourseModules } from "store/newCourse/selectors";
import { Currency } from "types/course";
import TextField from "components/ui/TextField";
import IconButton from "components/ui/IconButton";
import Container from "components/ui/Container";
import Select from "components/ui/Select";
import PlusIcon from "components/icons/Plus";
import CloseIcon from "components/icons/Close";
import DoneIcon from "components/icons/Done";
import { ModuleCard } from "components/ModuleCard";
import { CreateModuleForm } from "components/CreateModuleForm";
import * as Styled from "./CreateCourseForm.styled";

const courseCurrency = [
  {
    value: Currency.Uah,
    label: Currency.Uah,
  },
  {
    value: Currency.Usd,
    label: Currency.Usd,
  },
  {
    value: Currency.Rub,
    label: Currency.Rub,
  },
];

export const CreateCourseForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [temporaryCourseId, setTemporaryCourseId] = React.useState("");
  const [isCreateModuleOpen, setIsCreateModuleOpen] = React.useState(false);

  const modules = useAppSelector(newCourseModules);

  React.useEffect(() => {
    setTemporaryCourseId(uuidv4());
  }, []);

  const openModuleForm = () => {
    setIsCreateModuleOpen(true);
  };

  const closeModuleForm = () => {
    setIsCreateModuleOpen(false);
  };

  return (
    <Styled.Form>
      <Container>
        <TextField
          variant="standard"
          label={t("courseForm.title")}
          fullWidth
          margin="normal"
        />
        <TextField
          variant="standard"
          label={t("courseForm.description")}
          multiline
          fullWidth
          margin="normal"
        />
        <Styled.TextButtonBlock>
          <Styled.Text variant="body1">{t("courseForm.modules")}</Styled.Text>
          <IconButton onClick={openModuleForm} disabled={isCreateModuleOpen}>
            <PlusIcon sx={{ color: theme.colors.blue }} />
          </IconButton>
        </Styled.TextButtonBlock>
        {isCreateModuleOpen && (
          <CreateModuleForm
            temporaryCourseId={temporaryCourseId}
            closeModuleForm={closeModuleForm}
          />
        )}
        {modules.map((module) => (
          <ModuleCard module={module} key={module.temporaryModuleId} />
        ))}
        <Styled.PriceBlock>
          <TextField
            variant="standard"
            label={t("general.price")}
            multiline
            margin="normal"
          />
          <TextField
            variant="standard"
            label={t("general.priceWithDiscount")}
            multiline
            margin="normal"
          />
          <Select
            label={t("general.currency")}
            onChange={(value) => console.log(value)}
            options={courseCurrency}
          />
        </Styled.PriceBlock>
        <Styled.ActionButtons>
          <Styled.ActionButton
            onClick={() => {}}
            variant="contained"
            disabled={false}
          >
            {t("general.save")}
            <DoneIcon />
          </Styled.ActionButton>
          <Styled.ActionButton
            onClick={() => {}}
            variant="contained"
            color="secondary"
          >
            {t("general.cancel")}
            <CloseIcon />
          </Styled.ActionButton>
        </Styled.ActionButtons>
        <Styled.Text variant="body2">
          {t("courseForm.laterChangeAvailable")}
        </Styled.Text>
      </Container>
    </Styled.Form>
  );
};
