import {
  Container,
  CopyContainer,
  MenuContainer,
  Typography,
  Divider,
  ListContainer,
  List,
} from "./footer.style";

export const Footer = ({ data }) => {
  return (
    <Container>
      {/* <MenuContainer>
        <ListContainer>
          <Typography variant="h5">About Us</Typography>
        </ListContainer>
        <ListContainer>
          <Typography variant="h5">TIME २ NEED</Typography>
        </ListContainer>
        <ListContainer>
          <Typography variant="h5">Article & Video</Typography>
        </ListContainer>
      </MenuContainer> */}
      <CopyContainer>
        <Divider />
        <Typography variant="body1">
          Copyright © 2022 TIME २ NEED. All rights reserved.
        </Typography>
      </CopyContainer>
    </Container>
  );
};
