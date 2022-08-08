import PropTypes from "prop-types";
import { Tabs, Tab } from "./tabs.style";

export default function BasicTabs({ setValue, value }) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Normal" {...a11yProps(0)} />
        <Tab label="counsellor" {...a11yProps(1)} />
      </Tabs>
    </>
  );
}
