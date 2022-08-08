import {
  CardMedia as MuiCardMedia,
  Typography as MuiTypography,
  CardActionArea as MuiCardActionArea,
  List as MuiList,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
} from "@mui/material";
import styled from "styled-components";

export const CardMedia = styled(MuiCardMedia)``;
export const Typography = styled(MuiTypography)`
  font-family: "Sarabun";
`;
export const Container = styled.div`
  margin-top: 60px;
  width: 100%;
`;
export const CardActionArea = styled(MuiCardActionArea)``;

export const List = styled(MuiList)`
  display: flex;
  flex-direction: row;
  height: 100px;
`;
export const ListItem = styled(MuiListItem)``;
export const ListItemButton = styled(MuiListItemButton)`
  &.MuiListItemButton-root {
    height: 100%;
    background-color: ${(props) => props.color};
    color: white;
  }
`;

export const FloatingText = styled(Typography)`
  position: absolute;
  top: 15%;
  left: 10%;
  font-weight: bold;
  text-align: right;
  font-size: 30px;
  align-items: center;
`;

export const FloatingGradients = styled.div`
  position: absolute;
  top: 0%;
  opacity: 0.7;
  width: 100%;
  height: 567px;
  background-color: #808080;
`;

export const BodyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  font-weight: bold;
  font-size: 58px;
  text-align: left;
  width: 70%;
  line-height: 15px;
`;

export const RelativeContainer = styled.div`
  color: ${({ color }) => color};
  position: absolute;
  width: 45%;
  height: 300px;
  top: 15%;
  left: 5%;
`;
