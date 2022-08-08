import { CardMedia, Typography, CardContent, Card } from "./arCards.style";
import { CommonModal } from "../common/modal";
import { useState } from "react";
import { ShowModalContent } from "../ShowModal";
import { Highlight } from "react-instantsearch-dom";

export const ArticalsCrads = ({ data, hit }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card height={"330px"} width={"100%"} onClick={handleOpen}>
        <CardMedia
          component="img"
          alt={data?.image[0]?.alt}
          height="200px"
          image={data?.image[0]?.url}
          title={data?.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            font="Sarabun"
            component="div"
          >
            {data.title}
          </Typography>
          {/* <Typography variant="body2" font="Sarabun" color="text.secondary">
          {ReactHtmlParser(data.description)}
        </Typography> */}
        </CardContent>
        <div className="hit-type">
          <Highlight attribute="hit.entry.type" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="hit.entry.summary" hit={hit} />
        </div>
      </Card>
      <CommonModal
        open={open}
        handleClose={handleClose}
        height={"720px"}
        width="60%"
      >
        <ShowModalContent data={data} handleClose={handleClose} />
      </CommonModal>
    </>
  );
};
