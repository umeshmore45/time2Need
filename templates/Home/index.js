import { Banner } from "../../components/Banner";
import { ButtonCard } from "../../components/Cards";
import { Header } from "../../components/header";
import { ListOfMembers } from "../../components/List";
import { Wrapper } from "../../components/wrapper";
import { Container } from "./home.style";
import { contentstackOptimizeListReader } from "@uniformdev/optimize-tracker-contentstack";
import { Personalize } from "@uniformdev/optimize-tracker-react";
import { useEffect } from "react";
import { AboutUs } from "../../components/AboutUS";

const Home = ({ data }) => {
  let variations;
  if (data?.home?.banner && data?.home?.banner?.length > 1) {
    const mappedData = data?.home?.banner?.map((element) => {
      return {
        ...element,
        intentTag: element.uniform,
      };
    });
    variations = contentstackOptimizeListReader(mappedData);
  }

  return (
    <Wrapper>
      <Container>
        {variations && (
          <Personalize variations={variations} component={Banner} />
        )}
        {/* <Banner action={false} height={"500px"} imageHeight={"810px"} /> */}
        <ButtonCard cardData={data.home.article} />
        <AboutUs data={data.home.about_us} />
        <ListOfMembers data={data.home.testimonial} />
      </Container>
    </Wrapper>
  );
};

export default Home;
