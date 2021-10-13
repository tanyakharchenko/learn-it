import React from "react";
import MUIContainer from "@mui/material/Container";

export const PageContainer: React.FC = ({ children }) => (
  <MUIContainer sx={{padding: '2rem 0'}}>{children}</MUIContainer>
);

const Container = MUIContainer;

export default Container;
