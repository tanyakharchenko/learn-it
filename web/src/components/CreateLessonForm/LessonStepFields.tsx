import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "components/ui/TextField";
import IconButton from "components/ui/IconButton";
import CloseIcon from "components/icons/Close";
import * as Styled from "./CreateLessonForm.styled";

interface OwnProps {
  titleValue: string;
  titleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  descriptionValue: string;
  descriptionOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileRef: React.MutableRefObject<{
    new (): HTMLInputElement;
    prototype: HTMLInputElement;
  }>;
  fileUploaded?: File | null;
  removeUploadedFile?: () => void;
}

export const LessonStepFields: React.FC<OwnProps> = ({
  titleValue,
  titleOnChange,
  descriptionValue,
  descriptionOnChange,
  fileRef,
  fileUploaded,
  removeUploadedFile,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <TextField
        label={t("lessonStep.title")}
        fullWidth
        margin="dense"
        size="small"
        value={titleValue}
        onChange={titleOnChange}
      />
      <TextField
        label={t("lessonStep.description")}
        fullWidth
        margin="dense"
        size="small"
        value={descriptionValue}
        onChange={descriptionOnChange}
      />
      <TextField
        fullWidth
        margin="dense"
        size="small"
        type="file"
        inputRef={fileRef}
      />
      {fileUploaded && (
        <>
          <div style={{display: "flex"}}>
            <Styled.UploadedFileText ellipsis>
              {fileUploaded.name}
            </Styled.UploadedFileText>
            <IconButton onClick={removeUploadedFile}>
              <CloseIcon color="error" fontSize="small" />
            </IconButton>
          </div>
          <Styled.UploadedFileText>
            {t("lessonStep.changeUploadedFile")}
          </Styled.UploadedFileText>
        </>
      )}
    </>
  );
};
