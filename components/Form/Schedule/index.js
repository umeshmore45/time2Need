import { Button, MenuItem } from "@mui/material";
import { InputField } from "../../common/TextField";
import { ButtonConatiner, Form } from "./schedule.style";
import { checkCookies, getCookie } from "cookies-next";
import { useState } from "react";
import { createEntry } from "../../../service/contentstackSDK";
import { useSnackbar } from "notistack";
import moment from "moment";

export const ScheduleMeeting = ({ handleClose }) => {
  const [date, setDate] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkCookies("uid")) {
      const entryData = {
        entry: {
          title: event.target.elements.title.value,
          topics: event.target.elements.topic.value,
          display_name: event.target.elements.diplay_name.value,
          meeting_id: event.target.elements.meeting_id.value,
          date: date,
          user_details: [{ uid: getCookie("uid"), _content_type_uid: "user" }],
        },
      };
      const result = await createEntry(
        "schedule",
        "en-us",
        JSON.stringify(entryData)
      );
      if (result === "Entry created successfully.") {
        enqueueSnackbar(
          `Hello ${event.target.elements.diplay_name.value}, Meeting is Scheduled successfully`,
          { variant: "success" }
        );
        handleClose();
      } else {
        enqueueSnackbar(
          `Hello ${event.target.elements.diplay_name.value}, Please Provide New Title for Meeting `,
          { variant: "error" }
        );
      }
    } else {
      enqueueSnackbar(`Hello, Please Login First`, { variant: "warning" });
    }
  };

  const topics = [
    { label: "Share Your Stories", value: "Share Your Stories" },
    { label: "Comedy", value: "Comedy" },
    { label: "Nature", value: "Nature" },
    { label: "Motivational", value: "Motivational" },
    { label: "Travel", value: "Travel" },
  ];

  return (
    <Form id="myform" onSubmit={handleSubmit}>
      <InputField required label={"Title"} name="title" />
      <InputField required label={"Display Name"} name="diplay_name" />
      <InputField
        required
        label={"Meeting Id"}
        type={"number"}
        name="meeting_id"
      />
      <InputField required name="topic" label={"Topic"} select={true}>
        {topics.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </InputField>
      <InputField
        required
        onChange={(event) => {
          setDate(moment(event).format("YYYY-MM-DD"));
        }}
        disablePast
        format="DD-MM-YYYY"
        value={date}
        name="date"
        label={"Pick Date"}
        datePicker={true}
        ampm={false}
      />
      <ButtonConatiner>
        <Button type="submit" form="myform">
          Schedule
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </ButtonConatiner>
    </Form>
  );
};
