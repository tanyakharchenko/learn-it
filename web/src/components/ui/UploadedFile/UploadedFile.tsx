import React from 'react';
import IconButton from 'components/ui/IconButton';
import CloseIcon from 'components/icons/Close';
import * as Styled from './UploadedFile.styled';

interface OwnProps {
    fileName: string;
    onRemove?: () => void;
}

const UploadedFile: React.FC<OwnProps> = ({fileName, onRemove}) => {
  return (
    <div style={{ display: "flex" }}>
      <Styled.UploadedFileText>
        {fileName}
      </Styled.UploadedFileText>
      <IconButton onClick={onRemove}>
        <CloseIcon color="secondary" fontSize="small" />
      </IconButton>
    </div>
  );
};

export default UploadedFile;
