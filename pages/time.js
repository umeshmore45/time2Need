import React, { useState } from "react";
import { getContentByURL, getEntries } from "../service/contentstackSDK";
import { TimeDoNeed } from "../templates/TimeNeed";

const Home = (props) => {
  const [data, setData] = useState(props.response);
  return <TimeDoNeed data={data} />;
};

export const getStaticProps = async () => {
  const response = await getEntries("time_2_need", "en-us", [
    "need_help.counselor",
  ]);
  return {
    props: {
      response: { time: response },
    },
  };
};

export default Home;
