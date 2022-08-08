import { Card } from "../common/card";
import {
  CardActionArea,
  CardMedia,
  Conatiner,
  IconButton,
  CardContent,
  Typography,
  Button,
  ActionContainer,
  IntialContainer,
} from "./Cards.style";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const ButtonCard = ({ cardData }) => {
  return (
    <IntialContainer>
      <Typography font="Sarabun" variant="h2">
        {cardData.title}
      </Typography>
      <Conatiner>
        {cardData?.article_and_videos?.map((item, index) => (
          <Card key={index} width={"30%"}>
            <CardMedia
              component="img"
              alt={item.alt}
              height="200px"
              image={
                item?.image && item?.image[0]?.url ? item.image[0].url : ""
              }
              title={item.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                font="Sarabun"
                component="div"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" font="Sarabun" color="text.secondary">
                {item.summary}
              </Typography>
            </CardContent>
            <ActionContainer>
              <FavoriteIcon />
              <Button size="small">Read More</Button>
            </ActionContainer>
          </Card>
        ))}
      </Conatiner>
    </IntialContainer>
  );
};
