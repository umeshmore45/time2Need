import styled from "styled-components";
import { Box as MuiBox, Modal as MuiModal } from "@mui/material";

export const Box = styled(MuiBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  bgcolor: background.paper;
  border: 2px solid white;
  boxshadow: 24;
  pt: 2;
  px: 4;
  pb: 3;
  background-color: white;
  border-radius: 20px;
`;

export const Modal = styled(MuiModal)`
  width: 100%;
  background-color: #77777766;
`;
