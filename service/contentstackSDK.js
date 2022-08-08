import Contentstack from "contentstack";
import axios from "axios";

const { API_KEY } = process.env;
const { DELIVERY_TOKEN } = process.env;
const { ENVIROMENT_NAME } = process.env;
const { MANAGEMENT_TOKEN } = process.env;

let Stack = Contentstack.Stack({
  api_key: API_KEY,
  delivery_token: DELIVERY_TOKEN,
  environment: ENVIROMENT_NAME,
  region: Contentstack.Region.US,
});

const optionCreate = (url, method, api_key, authorization, body) => {
  const config = {
    url,
    method,
    headers: {
      //...body.getHeaders(),
      api_key: api_key,
      Authorization: authorization,
      "Content-Type": "application/json",
    },
  };
  if (body) {
    config.data = body;
  }
  return config;
};

const getContentByURL = async (contentType, slug, locale, referenceUids) => {
  try {
    const Query = Stack.ContentType(contentType)
      .Query()
      .includeReference(referenceUids)
      .language(locale);
    const result = await Query.where("url", `/${slug}`).toJSON().find();
    return result[0][0];
  } catch (err) {
    throw new Error(err);
  }
};

const getEntries = async (contentTypeUid, locale, referenceUids) => {
  try {
    const Query = Stack.ContentType(contentTypeUid)
      .Query()
      .includeReference(referenceUids)
      .language(locale);
    const result = await Query.includeOwner().toJSON().find();
    return result[0][0];
  } catch (error) {
    throw new Error(error);
  }
};

const createEntry = async (contentTypeUid, locale, entryData) => {
  try {
    const url = `https://api.contentstack.io/v3/content_types/${contentTypeUid}/entries?locale=${locale}`;
    const result = await axios(
      optionCreate(url, "POST", API_KEY, MANAGEMENT_TOKEN, entryData)
    );
    return result.data.notice;
  } catch (error) {
    return `Error creating entry of ${contentTypeUid}: ${error}`;
  }
};

const getAllEntry = async (contentTypeUid, locale) => {
  try {
    const url = `https://api.contentstack.io/v3/content_types/${contentTypeUid}/entries?locale=${locale}`;
    const result = await axios(
      optionCreate(url, "GET", API_KEY, MANAGEMENT_TOKEN)
    );
    const entries =
      result &&
      result.data &&
      result.data.entries.length &&
      result.data.entries;
    if (entries) return entries;
  } catch (error) {
    return `Error fetching entry of ${contentTypeUid}: ${error}`;
  }
};

const getScheduleForSpecificUser = async (todaySchedule, specificUser) => {
  // console.log(todaySchedule.length, '---------------', todaySchedule,'---------------', specificUser.length,'---------------',specificUser)
  let result = todaySchedule.filter((schedule) =>
    specificUser.some((user) => schedule.user_details[0].uid === user.uid)
  );
  return result;
};

const getScheduleBasedOnUser = async (
  contentTypeUid1,
  contentTypeUid2,
  locale,
  join_as
) => {
  try {
    const schedule = await getAllEntry(contentTypeUid1, locale);
    let d = new Date();
    let currentDate = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(
      -2
    )}-${("0" + d.getDate()).slice(-2)}`;
    const todaySchedule = schedule.filter(
      (present) => present.date === currentDate
    );
    const userDetails = await getAllEntry(contentTypeUid2, locale);
    const specificUser = userDetails.filter((user) => join_as.includes(user.join_as));
    const finalResult = await getScheduleForSpecificUser(
      todaySchedule,
      specificUser
    );
    return finalResult;
  } catch (error) {
    console.log(`Error getScheduleBasedOnUser: ${error}`);
    return `Error getScheduleBasedOnUser: ${error}`;
  }
};

const getSingleEntry = async (contentTypeUid, entryUid) => {
  try {
    const url = `https://api.contentstack.io/v3/content_types/${contentTypeUid}/entries/${entryUid}`;
    const result = await axios(
      optionCreate(url, "GET", API_KEY, MANAGEMENT_TOKEN)
    );
    return result?.data?.entry;
  } catch (error) {
    return `Error fetching entry of ${contentTypeUid}: ${error}`;
  }
};

const getEntryByQuery = async ({ email }) => {
  const url = `https://api.contentstack.io/v3/content_types/user/entries?query={"email_id": "${email}"}`;
  const result = await axios(
    optionCreate(url, "GET", API_KEY, MANAGEMENT_TOKEN)
  );
  return result.data;
};

const getArticalAndVidoeData = async ({ type, topics }) => {
  if (type.length === 0 && topics.length === 0) {
    const url = `https://api.contentstack.io/v3/content_types/articles_and_videos/entries`;
    const result = await axios(
      optionCreate(url, "GET", API_KEY, MANAGEMENT_TOKEN)
    );
    return result.data;
  } else {
    let Query = Stack.ContentType("articles_and_videos").Query();
    const Query1 = await Stack.ContentType("articles_and_videos")
      .Query()
      .containedIn("type", type);
    const Query2 = await Stack.ContentType("articles_and_videos")
      .Query()
      .containedIn("topics", topics);
    let Data;
    if (type.length > 0 && topics.length > 0) {
      Data = await Query.and(Query1, Query2).toJSON().find();
    } else if (topics.length > 0) {
      Data = await Query2.toJSON().find();
    } else if (type.length > 0) {
      Data = await Query1.toJSON().find();
    }
    return { entries: Data[0] };
  }
};

module.exports = {
  getContentByURL,
  getEntries,
  createEntry,
  getAllEntry,
  getScheduleBasedOnUser,
  getEntryByQuery,
  getArticalAndVidoeData,
};
