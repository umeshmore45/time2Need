import { IntialContainer, Button, Typography } from "./shortBanner.style";
import { CommonModal } from "../common/modal";
import { useState } from "react";
import { ScheduleMeeting } from "../Form/Schedule";

export const ShortBanner = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IntialContainer backgroundImage={data.background_image[0].url}>
        <Typography variant="h2">{data.title}</Typography>
        <Button onClick={handleOpen}>
          <Typography hover={true} color="white" variant="body1">
            {data.cta.title}
          </Typography>
        </Button>
      </IntialContainer>
      <CommonModal open={open} handleClose={handleClose}>
        <ScheduleMeeting handleClose={handleClose} />
      </CommonModal>
    </>
  );
};
