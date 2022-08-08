import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
  CardContent as MuiCardContent,
} from "@mui/material";
import styled from "styled-components";
import { Card as MuiCard } from "../common/card";

export const CardMedia = styled(MuiCardMedia)``;
export const Typography = styled(MuiTypography)`
  font-family: ${(porps) => porps.font};
  color: #0c404e;
`;

export const CardContent = styled(MuiCardContent)``;

export const Card = styled(MuiCard)`
  margin: 30px;
  border-radius: 30px;
`;
