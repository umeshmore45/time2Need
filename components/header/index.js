import { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Button,
  CardMedia,
  LogoConatiner,
  AvatarContainer,
} from "./header.style";
import { SubHeader } from "../sub-header";
import ImageAvatar from "../common/avatar";
import { useScrollTrigger } from "@mui/material";
import { CommonModal } from "../common/modal";
import { Loginfrom } from "../Form/Login";

export const Header = () => {
  const trigger = useScrollTrigger();
  const [open, setOpen] = useState(false);

  const avatarClick = (e) => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <AppBar height={"70px"}>
          <Toolbar>
            <SubHeader />
            <LogoConatiner>
              <CardMedia
                component="img"
                alt={"time to need"}
                height="100px"
                width={"100%"}
                image={
                  "https://images.contentstack.io/v3/assets/blt8acc25df64f80269/bltd06c94473ef413db/6293a3661a5eff4c4c377680/umesh_work-01.png"
                }
              />
            </LogoConatiner>
            <AvatarContainer>
              <ImageAvatar
                onClick={avatarClick}
                alt="some"
                url=""
                width={40}
                height={40}
              />
            </AvatarContainer>
          </Toolbar>
        </AppBar>
      </Box>
      <CommonModal
        open={open}
        handleClose={handleClose}
        height={"400px"}
        width="30%"
      >
        <Loginfrom handleClose={handleClose} />
      </CommonModal>
    </>
  );
};
