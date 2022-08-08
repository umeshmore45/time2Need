import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ListItemText } from "./aside.style";
import Checkbox from "@mui/material/Checkbox";

export const NestedList = ({ handleClick }) => {
  const topics = [
    { value: "Share Your Stories" },
    { value: "Motivational" },
    { value: "Comedy" },
    { value: "Nature" },
    { value: "Travel" },
  ];

  return (
    <List
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 380,
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
        <ListItemText primary="Type" />
      </ListItemButton>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              onClick={(e) => handleClick(e, "Articles", true)}
              // checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText primary="Articles" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              onClick={(e) => handleClick(e, "Videos", true)}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItemButton>
      </List>
      <ListItemButton>
        <ListItemText primary="Topics" />
      </ListItemButton>
      <List component="div" disablePadding>
        {topics.map((item, index) => (
          <ListItemButton key={index} sx={{ pl: 4 }}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                // checked={checked.indexOf(value) !== -1}
                onClick={(e) => handleClick(e, item.value)}
                tabIndex={-1}
                disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText primary={item.value} />
          </ListItemButton>
        ))}
      </List>
    </List>
  );
};
