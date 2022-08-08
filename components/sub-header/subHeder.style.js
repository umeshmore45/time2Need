import styled from "styled-components";
import { Box as MuiBox } from "@mui/material";
import { Tab as MuiTab } from "@mui/material";
import { Tabs as MuiTabs } from "@mui/material";

export const Tab = styled(MuiTab)`
  &.MuiTab-root {
    &.Mui-selected {
      color: #475e5f;
    }
    &.MuiButtonBase-root {
      font-family: "Sarabun";
    }
  }
`;
export const Tabs = styled(MuiTabs)`
  display: flex;
  justify-content: space-evenly;
`;
export const Box = styled(MuiBox)`
  width: 30%;
`;
