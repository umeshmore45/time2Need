import { ScrollTable } from "../../components/Table";
import LabTabs from "../../components/Tabs";
import { Wrapper } from "../../components/wrapper";
import {
  Container,
  NeedHelpContainer,
  SpacingContainer,
  Typography,
} from "./timedoneed.style";
import { useState } from "react";
import { IconButton } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import HelpIcon from "@mui/icons-material/Help";
import { Banner } from "../../components/Banner";
import { ShortBanner } from "../../components/ShortBanner";
import { Layout } from "../../styles/space.stlye";
import { useEffect, useCallback } from "react";
import { getScheduleBasedOnUser } from "../../service/contentstackSDK";
import { checkCookies, getCookie } from "cookies-next";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';

export const TimeDoNeed = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [needTableData, setNeedTableData] = useState([]);
  const [value, setValue] = useState(0);

  const getData = useCallback(async () => {
    const schedule = await getScheduleBasedOnUser(
      "schedule",
      "user",
      "en-us",
      value === 0 ? ["Donar", "Volunteer"] : ["Counselor"]
    );

    if (schedule.length > 0) {
      schedule.map((item) => {
        item.id = item.uid;
      });
    }
    setTableData(schedule);
  }, [value]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getNeedData = useCallback(async () => {
    if (data?.time?.need_help && data?.time?.need_help?.counselor) {
      let newData = data.time.need_help.counselor;
      newData = newData.map((item) => {
        return { id: item.uid, display_name: item.title, ...item };
      });
      setNeedTableData(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNeedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getNeedData]);


  const columns = [
    { field: "id", headerName: "ID", width: 200, hide: true },
    { field: "title", headerName: "Title", width: 200 },
    { field: "display_name", headerName: "Display Name", width: 200 },
    { field: "meeting_id", headerName: "Meeting Id", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    { field: "topics", headerName: "Topics", width: 200 },
    {
      field: "join",
      headerName: "join Call",
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <Link
            target={"_blank"}
            href={`https://us04web.zoom.us/j/${params.row.meeting_id}`}
          >
            <a target="_blank">
              <VideoCallIcon color="primary" />
            </a>
          </Link>
        );
      },
    },
  ];

  const columnsForNeed = [
    { field: "id", headerName: "ID", width: 420, hide: true },
    { field: "title", headerName: "Title", width: 600 },
    { field: "email_id", headerName: "Email", width: 600 },
    {
      field: "request",
      headerName: "Request",
      sortable: false,
      width: 200,
      renderCell: (params) => {
        return (
          <Link
            target={"_blank"}
            href={`mailto:${params.row.email_id}`}
          >
            <a target="_blank">
              <EmailIcon color="primary" />
            </a>
          </Link>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Banner
          {...data.time}
          action={false}
          height={"500px"}
          imageHeight={"810px"}
        />

        <LabTabs setValue={setValue} value={value} />

        {value === 0 ? (
          <ScrollTable TableHeader={columns} rows={tableData} />
        ) : (
          <ScrollTable TableHeader={columns} rows={tableData} />
        )}

        {checkCookies("join_as") && getCookie("join_as") === "Needer" ? (
          <NeedHelpContainer>
            <Typography variant="h2">{data?.time?.need_help?.title}</Typography>
            {needTableData.length > 0 && (
              <ScrollTable TableHeader={columnsForNeed} rows={needTableData} />
            )}
          </NeedHelpContainer>
        ) : (
          <SpacingContainer>
            <ShortBanner data={data.time.donate_time} />
          </SpacingContainer>
        )}
      </Container>
    </Wrapper>
  );
};
