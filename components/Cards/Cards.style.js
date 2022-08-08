import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
  CardActionArea as MuiCardActionArea,
  IconButton as MuiIconButton,
  CardContent as MuiCardContent,
  Button as MuiButton,
} from "@mui/material";

import styled from "styled-components";

export const CardMedia = styled(MuiCardMedia)``;
export const CardActionArea = styled(MuiCardActionArea)``;
export const Typography = styled(MuiTypography)`
  font-family: ${(porps) => porps.font};
  color: #0c404e;
`;
export const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const IconButton = styled(MuiIconButton)``;

export const CardContent = styled(MuiCardContent)``;

export const Button = styled(MuiButton)``;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  align-items: center;
`;

export const IntialContainer = styled.div`
  min-height: 650px;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
