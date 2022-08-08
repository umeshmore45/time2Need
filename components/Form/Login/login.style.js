import {
  Button as MuiButton,
  Typography as MuiTypography,
} from "@mui/material";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 85%;
`;

export const ButtonConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
`;

export const Typography = styled(MuiTypography)`
  /* font-family: "Roboto"; */
  color: ${(props) => props.color};
  font-family: "Sarabun";
`;

export const Close = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    margin-left: 87%;
    padding: 10px;
    color: #0c404e;
  }
`;

export const Button = styled(MuiButton)`
  padding: 3% 6%;
  border: 2px solid ${(props) => props.log && "#0c404e"};
  color: ${(props) => props.log && "#fff"};
  background-color: ${(props) => props.log && "#0c404e"};
  &:hover {
    background-color: ${(props) => props.log && "#0c404e"};
  }
`;
