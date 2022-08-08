import {
  CardMedia,
  Conatiner,
  Typography,
  Card,
  TextConatiner,
} from "./aboutUs.style";

export const AboutUs = ({ data }) => {
  return (
    <>
      <Conatiner>
        <Card width="90%" height="100%" radius="0px">
          <TextConatiner>
            <Typography font="Sarabun" variant="h3">
              {data.title}
            </Typography>
            <Typography font="Sarabun" variant="h4">
              {data.about_detail[0].title}
            </Typography>
            <Typography font="Sarabun" variant="body1">
              {data.about_detail[0].description}
            </Typography>
          </TextConatiner>
        </Card>
        <CardMedia
          component="img"
          alt={data.title}
          height="500px"
          image={data?.image && data?.image[0]?.url ? data.image[0].url : ""}
          title={data?.title}
        />
      </Conatiner>
    </>
  );
};
