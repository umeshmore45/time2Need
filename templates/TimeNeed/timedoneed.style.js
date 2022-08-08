import { Typography as MuiTypography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  /* margin-top: 126px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #edece7;
`;

export const Typography = styled(MuiTypography)`
  font-family: "Sarabun";
  color: #0c404e;
`;

export const SpacingContainer = styled.div`
  margin: 30px 0px;
  width: 100%;
  align-items: center;
`;

export const NeedHelpContainer = styled.div`
  padding-top: 40px;
  background-color: #e0ded4;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 800px;
`;
