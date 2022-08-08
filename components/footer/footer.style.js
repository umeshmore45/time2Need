import styled from "styled-components";
import { Typography as MuiTypography, List as MuiList } from "@mui/material";

export const Container = styled.div`
  background-color: #475e5f;
  width: 100%;
  /* height: 450px; */
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: 60%;
  height: 60%;
  margin-top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const CopyContainer = styled.div`
  width: 60%;
  height: 15%;
  margin-bottom: 1%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 2px solid white;
`;

export const Typography = styled(MuiTypography)`
  font-family: "Sarabun";
`;

export const ListContainer = styled.div`
  width: 40%;
  height: 80%;
  color: white;
`;

export const List = styled(MuiList)`
  font-family: "Sarabun";
`;
