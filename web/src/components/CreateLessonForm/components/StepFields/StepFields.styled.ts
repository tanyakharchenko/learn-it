import styled from "styled-components";

export const UploadedFileText = styled.p<{ ellipsis?: boolean }>`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secondaryText};
`;
