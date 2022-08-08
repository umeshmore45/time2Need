import {
  CardMedia,
  Typography,
  Container,
  CardActionArea,
  List,
  ListItem,
  ListItemButton,
  FloatingText,
  FloatingGradients,
  BodyContainer,
  RelativeContainer,
} from "./banner.style";
import { Card } from "../common/card";
import { useBehaviorTracking } from "@uniformdev/optimize-tracker-react";
// import { PersonalizableListItem } from '@uniformdev/optimize-tracker-common'

// export const Banner = ({
//   action = true,
//   height = "810px",
//   imageHeight = "710px",
// })
export const Banner = (props) => {
  useBehaviorTracking(props.uniform);

  let action = false;
  return (
    <Container>
      <Card width={"100%"} height="500px" radius="0px" position="relative">
        <CardMedia
          component="img"
          alt={props?.subtitle}
          height="500px"
          image={
            props?.banner_image && props?.banner_image[0]?.url
              ? props.banner_image[0].url
              : ""
          }
          title={props?.title}
        />
        {/* <FloatingGradients /> */}
        <RelativeContainer color={"white"}>
          <FloatingText>
            <Typography gutterBottom variant="h2" component="h2">
              {props?.title}
            </Typography>
          </FloatingText>
          <BodyContainer>
            <Typography variant="h6" component="h6" className="subTitle">
              {props?.subtitle}
            </Typography>
          </BodyContainer>
        </RelativeContainer>
        {action && (
          <CardActionArea>
            <List>
              <ListItem disablePadding>
                <ListItemButton color={"#0c404e"}>
                  <Typography gutterBottom variant="h4" component="h4">
                    Become A Time Doneter
                  </Typography>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton color="#ff5844">
                  <Typography gutterBottom variant="h4" component="h4">
                    Need Help
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>
          </CardActionArea>
        )}
      </Card>
    </Container>
  );
};
