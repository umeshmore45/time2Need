import { NestedList } from "../../components/Aside";
import { Wrapper } from "../../components/wrapper";
import { Container, CardContainer, IntialContainer } from "./article.style";
import { useState, useEffect, useCallback } from "react";
import { getArticalAndVidoeData } from "../../service/contentstackSDK";
import { ArticalsCrads } from "../../components/ArCards";

export const ArticlePage = ({ data }) => {
  const [topicsData, setTopicsData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [entriesData, setEntriesData] = useState([]);

  const handleClick = (e, valueString, from = false) => {
    if (from) {
      if (e.target.checked) {
        setTypeData([valueString, ...typeData]);
      } else {
        setTypeData(typeData.filter((item) => item !== valueString));
      }
    } else {
      if (e.target.checked) {
        setTopicsData([valueString, ...topicsData]);
      } else {
        setTopicsData(topicsData.filter((item) => item !== valueString));
      }
    }
  };

  const getArticalData = useCallback(async () => {
    const reslut = await getArticalAndVidoeData({
      type: typeData,
      topics: topicsData,
    });
    setEntriesData(reslut.entries);
  }, [typeData, topicsData]);

  useEffect(() => {
    getArticalData();
  }, [getArticalData]);

  return (
    <Wrapper>
      <IntialContainer>
        <Container>
          <NestedList handleClick={handleClick} />
          <CardContainer>
            {entriesData && entriesData.length > 0
              ? entriesData.map((item) => (
                  <ArticalsCrads key={item.uid} data={item} />
                ))
              : "No Data"}
          </CardContainer>
        </Container>
      </IntialContainer>
    </Wrapper>
  );
};
