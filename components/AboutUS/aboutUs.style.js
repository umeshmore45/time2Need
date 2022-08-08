import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
} from "@mui/material";
import { Card as MuiCard } from "../common/card";
import styled from "styled-components";

export const CardMedia = styled(MuiCardMedia)``;

export const Conatiner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Typography = styled(MuiTypography)`
  font-family: ${(porps) => porps.font};
  color: #0c404e;
`;

export const Card = styled(MuiCard)`
  align-items: center;
`;

export const TextConatiner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
  height: 70%;
  margin-left: 12%;
  margin-top: 10%;
`;
