import { TableCell, TableHead, TableRow } from "@mui/material";
("./table.style");

export const HeaderRenderer = ({ headerdata }) => {
  return (
    <TableHead>
      <TableRow>
        {headerdata.map((item, index) => (
          <TableCell key={index} align={index === 0 ? "left" : "right"}>
            {item}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
