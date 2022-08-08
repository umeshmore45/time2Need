import { Tabs as MuiTabs, Tab as MuiTab } from "@mui/material";
import styled from "styled-components";

export const Tab = styled(MuiTab)`
  &.MuiTab-root {
    width: 500px;

    &.Mui-selected {
      color: #475e5f;
    }
    &.MuiButtonBase-root {
      font-family: "Sarabun";
      font-weight: 400;
    }
  }
`;

export const Tabs = styled(MuiTabs)`
  margin: 20px 0;
`;
