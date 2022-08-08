import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import HomePage from "../templates/Home";
import { getContentByURL, getEntries } from "../service/contentstackSDK";

export default function Home(props) {
  const [data, setData] = useState(props);

  return <>{data && Object.keys(data).length && <HomePage data={data} />}</>;
}

export const getStaticProps = async () => {
  const home = await getContentByURL("home_page", "", "en-us", [
    "article.article_and_videos",
    "testimonial.volunteers",
  ]);
  
  return {
    props: {
      home: home,
    },
  };
};
