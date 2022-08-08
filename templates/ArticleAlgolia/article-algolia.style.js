import styled from "styled-components";
import {
  RefinementList,
  SearchBox,
  Hits as MuiHits,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from "react-instantsearch-dom";
import { List as MuiList } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  background-color: #edece7;
  justify-content: space-around;
  height: 1200px;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: auto;
`;

// export const CardContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   width: 100%;
//   min-height: 500px;
//   align-items: flex-start;
// `;

export const IntialContainer = styled.div`
  background-color: #edece7;
  width: 100%;
  align-items: center;
  align-content: center;
  div.ais-SearchBox {
    form.ais-SearchBox-form {
      input.ais-SearchBox-input {
        font: inherit;
        letter-spacing: inherit;
        color: currentColor;
        padding: 3px 0 5px;
        border: 0;
        box-sizing: content-box;
        background: none;
        height: 1.4375em;
        margin: 0;
        display: block;
        min-width: 0;
        width: 70%;
        padding: 16.5px 14px;
      }
      button.ais-SearchBox-submit {
        margin-left: 60%;
      }
      button.ais-SearchBox-reset {
        right: 7.3rem;
      }
    }
  }
`;

export const AsideConatiner = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const SearchConatiner = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2%;
`;

// export const CardContainer = styled;

export const Hits = styled(MuiHits)`
  padding-top: 30px;
  width: 100%;
  align-items: flex-start;
  ul.ais-Hits-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    li.ais-Hits-item {
      margin-top: 0;
      border: none;
      box-shadow: none;
      margin-left: 0;
      margin: 1% 1.5%;
      padding: 0;
      height: 350px;
      width: 30%;
    }
  }
`;

export const List = styled(MuiList)`
  div.ais-RefinementList {
    margin-bottom: 8%;
    ul.ais-RefinementList-list {
      display: flex;
      flex-direction: column;
      li.ais-RefinementList-item {
        /* border: 2px solid red; */
        padding: 10px;
        label.ais-RefinementList-label {
          input.ais-RefinementList-checkbox {
            width: 15px;
            height: 15px;
            span.ais-RefinementList-labelText {
              margin: 10px 0;
            }
          }
        }
      }
    }
  }
`;

// &.copy {
//     font: inherit;
//     letter-spacing: inherit;
//     color: currentColor;
//     padding: 4px 0 5px;
//     border: 0;
//     box-sizing: content-box;
//     background: none;
//     height: 1.4375em;
//     margin: 0;
//     -webkit-tap-highlight-color: transparent;
//     display: block;
//     min-width: 0;
//     width: 100%;
//     -webkit-animation-name: mui-auto-fill-cancel;
//     animation-name: mui-auto-fill-cancel;
//     -webkit-animation-duration: 10ms;
//     animation-duration: 10ms;
//     padding: 16.5px 14px;
//   } ;
