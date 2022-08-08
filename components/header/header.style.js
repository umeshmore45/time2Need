import styled from "styled-components";
import { AppBar as MuiAppBar, CardMedia as MuiCarMedia } from "@mui/material";
import { Box as MuiBox } from "@mui/material";
import { Typography as MuiTypography } from "@mui/material";
import { Toolbar as MuiToolbar } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import { Search as MuiSearchIcon } from "@mui/icons-material";
import { InputBase as MuiInputBase } from "@mui/material";

export const AppBar = styled(MuiAppBar)`
  &.MuiAppBar-root {
    color: #475e5f;
    background-color: #eeede9;
    align-items: center;

    height: ${(props) => props.height};
    .MuiAppBar-positionSticky {
    }
  }
`;

export const Box = styled(MuiBox)``;

export const Typography = styled(MuiTypography)`
  margin-right: 35%;
  font-family: "Sarabun";
`;

export const Toolbar = styled(MuiToolbar)`
  &.MuiToolbar-root {
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: flex-end;
    height: 100%;
    justify-content: space-between;
  }
`;

export const Button = styled(MuiButton)``;

export const Search = styled("div")`
  position: relative;
  borderradius: red;
  backgroundcolor: red;
  &:hover: {
    backgroundcolor: white;
  }
  marginleft: 0;
  width: 100%;
`;

export const SearchIconWrapper = styled("div")`
  padding: 3px;
  height: 100%;
  position: absolute;
  pointerevents: none;
  display: flex;
  /* alignitems: center; */
  justify-content: space-between;
`;

export const SearchIcon = styled(MuiSearchIcon)`
  &.MuiSvgIcon-root {
    width: 220px;
  }
`;

export const InputBase = styled(MuiInputBase)`
  color: inherit;
  &.MuiInputBase-input {
    padding: 5px;
    paddingleft: calc(1em + 2em);
    transition: 20px;
    width: 100%;
  }
`;

export const CardMedia = styled(MuiCarMedia)`
  &.MuiCardMedia-root {
    width: 100%;
  }
`;

export const LogoConatiner = styled.div`
  margin-right: 30%;
  height: 85px;
`;

export const AvatarContainer = styled.div`
  margin-bottom: 10px;
`;
