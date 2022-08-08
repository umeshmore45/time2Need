import { InputField } from "../../common/TextField";
import {
  Form,
  ButtonConatiner,
  Close,
  Button,
  Typography,
} from "./login.style";
import { getEntryByQuery } from "../../../service/contentstackSDK";
import { useState } from "react";
import { setCookies } from "cookies-next";
import { useSnackbar } from "notistack";
import Router from 'next/router'

export const Loginfrom = ({ handleClose }) => {


  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await getEntryByQuery({
      email: event.target.elements.email.value,
    });
    if (result && result.entries.length > 0) {
      if (result.entries[0].email_id === event.target.elements.email.value) {
        setCookies("uid", result.entries[0].uid);
        setCookies("join_as", result.entries[0].join_as);
        enqueueSnackbar(
          `Hello ${result.entries[0].title}, your logged in successfully`,
          { variant: "success" }
        );
        let userValue=result.entries[0].join_as
        Router.push({
          pathname: '/',
          query: { user: userValue.toLowerCase() },
        })
        handleClose();
      }
    } else {
      
      enqueueSnackbar("Please Enter valid Email", { variant: "error" });
    }
  };

  return (
    <>
      <Close onClick={handleClose} />
      <Form id="myform" onSubmit={handleSubmit}>
        <Typography color={"#0c404e"} variant="h4">
          Log In
        </Typography>
        <InputField
          required
          label={"Email Id"}
          name="email"
          type="email"
          inputProps={{
            autoComplete: "none",
          }}
        />
        <InputField
          required
          label={"Password"}
          name="password"
          type="password"
        />
        <ButtonConatiner>
          <Button log={true} type="submit" form="myform">
            Login
          </Button>
          <Button>Sign Up</Button>
        </ButtonConatiner>
      </Form>
    </>
  );
};
