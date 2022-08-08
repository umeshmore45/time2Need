import { useState } from "react";
import { Box, Tab, Tabs } from "./subHeder.style";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMemo } from "react";

const LinkTab = (props) => {
  const router = useRouter();
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        router.push(props.href);
      }}
      {...props}
    />
  );
};

export const SubHeader = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const path = useMemo(() => {
    return [
      { name: "Home", path: "/" },
      { name: "TIME २ NEED", path: "/time" },
      { name: "Article & Video", path: "/article" },
    ];
  }, []);

  useEffect(() => {
    setValue(path.findIndex((item) => item.path === router.asPath));
  }, [path, router]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "#004e64",
            top: 0,
          },
        }}
      >
        {path.map((item, index) => {
          return <LinkTab label={item.name} href={item.path} key={index} />;
        })}
      </Tabs>
    </Box>
  );
};
