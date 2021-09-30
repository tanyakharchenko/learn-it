import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "components/ui/TextField";
import UploadedFile from "components/ui/UploadedFile";
import * as Styled from "./StepFields.styled";

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

export const StepFields: React.FC<OwnProps> = ({
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
          <UploadedFile fileName={fileUploaded.name} onRemove={removeUploadedFile} />
          <Styled.UploadedFileText>
            {t("lessonStep.changeUploadedFile")}
          </Styled.UploadedFileText>
        </>
      )}
    </>
  );
};
