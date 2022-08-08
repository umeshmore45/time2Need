import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
  CardActionArea as MuiCardActionArea,
} from "@mui/material";
import styled from "styled-components";
import ImageAvatar from "../common/avatar";
import { Card as MuiCard } from "../common/card";

export const Typography = styled(MuiTypography)`
  font-family: ${(props) => props.font};
  color: #0c404e;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50%;
`;

export const Avatar = styled(ImageAvatar)``;

export const CardActionArea = styled(MuiCardActionArea)``;

export const Card = styled(MuiCard)`
  margin: 15px;
  align-items: center;
  display: flex;
  justify-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
`;

export const IntialContainer = styled.div`
  min-height: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #eeede8;
  margin-bottom: 70px;
`;
