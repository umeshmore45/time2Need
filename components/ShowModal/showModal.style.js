import {
  Typography as MuiTypography,
  CardMedia as MuiCardMedia,
} from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const Typography = styled(MuiTypography)`
  font-family: ${(porps) => porps.font};
  color: #0c404e;
  padding: 2px;
`;

export const Conatiner = styled.div`
  padding: 40px;
  height: 80%;
  overflow: scroll;
  overflow-x: visible;
`;

export const Close = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    margin-left: 95%;
    padding: 10px;
    color: #0c404e;
  }
`;

export const CardMedia = styled(MuiCardMedia)``;
