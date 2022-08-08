import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";
import { Typography as MuiTypography } from "../Cards/Cards.style";

export const IntialContainer = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${(props) => props.backgroundImage});
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Button = styled(MuiButton)`
  margin-bottom: 20px;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 40px;
  text-transform: none;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Typography = styled(MuiTypography)`
  font-family: "Sarabun";
  color: ${({ color = "white" }) => color};
  &:hover {
    color: ${({ hover = false, color }) => hover && "black"};
  }
`;
