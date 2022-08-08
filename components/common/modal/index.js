import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Modal } from "./modal.styel";

export function CommonModal({
  open,
  handleClose,
  children,
  height = "500px",
  width = "40%",
}) {
  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      BackdropProps={{ style: { backgroundColor: "black" } }}
    >
      <Box height={height} width={width}>
        {children}
      </Box>
    </Modal>
  );
}
