import { Typography, Conatiner, Close, CardMedia } from "./showModal.style";
import ReactHtmlParser from "react-html-parser";

export const ShowModalContent = ({ data, handleClose }) => {
  return (
    <>
      <Close onClick={handleClose} />
      <Conatiner>
        {data.type == "Videos" && (
          <video
            controls="controls"
            x-webkit-airplay="allow"
            data-youtube-id="N9oxmRT2YWw"
            width="100%"
            autoPlay
          >
            <source src={data.video_url} type="video/mp4" />
          </video>
          // <iframe
          //   width="100%"
          //   height={"400px"}
          //   src={data.video_url.replace("watch", "embed")}
          //   title="YouTube video player"
          //   frameBorder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // ></iframe>
        )}
        {data.type === "Articles" && (
          <CardMedia
            component="img"
            alt={data?.image?.alt}
            height="400px"
            image={data?.image[0].url}
            title={data?.title}
          />
        )}
        <Typography gutterBottom variant="h3" font="Sarabun" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" font="Sarabun" color="text.secondary">
          {ReactHtmlParser(data.description)}
        </Typography>
        {data?.summary && (
          <Typography variant="body2" font="Sarabun" color="text.secondary">
            {data.summary}
          </Typography>
        )}
      </Conatiner>
    </>
  );
};
