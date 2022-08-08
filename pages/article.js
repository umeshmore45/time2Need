import React from "react";
import { useRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { findResultsState } from "react-instantsearch-dom/server";
import ArticleAlgolia from "../templates/ArticleAlgolia";

const ALGOLIA_APP_ID = "WR2GQXAZQE",
  ALGOLIA_SEARCH_API_KEY = "6fd70178694f24e422d67518365f3979",
  ALGOLIA_SEARCH_INDEX = "machathon";

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);

const updateAfter = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path?.includes("?") ? qs.parse(path?.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? `${window?.location?.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: ALGOLIA_SEARCH_INDEX,
};

export default function Page(props) {
  const [searchState, setSearchState] = React.useState(props.searchState);
  const router = useRouter();
  const debouncedSetState = React.useRef();

  React.useEffect(() => {
    if (router) {
      router.beforePopState(({ url }) => {
        setSearchState(pathToSearchState(url));
      });
    }
  }, [router]);

  return (
    <>
      <ArticleAlgolia
        {...DEFAULT_PROPS}
        searchState={searchState}
        resultsState={props.resultsState}
        onSearchStateChange={(nextSearchState) => {
          clearTimeout(debouncedSetState.current);

          debouncedSetState.current = setTimeout(() => {
            const href = searchStateToURL(nextSearchState);

            router.push(href, href, { shallow: true });
          }, updateAfter);

          setSearchState(nextSearchState);
        }}
        createURL={createURL}
      />
    </>
  );
}

export async function getStaticProps({ resolvedUrl }) {
  const searchState = pathToSearchState(resolvedUrl);
  const resultsState = await findResultsState(ArticleAlgolia, {
    ...DEFAULT_PROPS,
    searchState,
  });

  return {
    props: {
      resultsState: JSON.parse(JSON.stringify(resultsState)),
      searchState,
    },
  };
}
