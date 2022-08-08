import React from "react";
import {
  RefinementList,
  SearchBox,
  Configure,
  Highlight,
  Pagination,
  InstantSearch,
} from "react-instantsearch-dom";
import {
  AsideConatiner,
  Container,
  Hits,
  SearchConatiner,
  List,
  IntialContainer,
} from "./article-algolia.style";
import { Wrapper } from "../../components/wrapper";
import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { ArticalsCrads } from "../../components/ArCards";

const HitComponent = ({ hit }) => {
  return <ArticalsCrads data={hit.entry} hit={hit} />;
};

const ArticleAlgolia = (props) => {
  return (
    <Wrapper>
      <IntialContainer>
        <InstantSearch {...props}>
          <Container>
            <AsideConatiner>
              <Configure hitsPerPage={9} />
              <SearchConatiner>
                <Typography variant="h5">Search Articles / Videos</Typography>
                <SearchBox />
              </SearchConatiner>
              <List component="div" disablePadding>
                <>
                  <ListItemText primary="Type" />
                  <RefinementList attribute="entry.type" />
                </>
                <>
                  <ListItemText primary="Topics" />
                  <RefinementList attribute="entry.topics" />
                </>
              </List>
            </AsideConatiner>
            <Hits hitComponent={HitComponent} />
          </Container>
        </InstantSearch>
      </IntialContainer>
    </Wrapper>
  );
};

export default ArticleAlgolia;
