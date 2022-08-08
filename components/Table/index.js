import {
  Paper,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  Table,
  DataGrid,
} from "./table.style";
// import { HeaderRenderer } from "./tableHeader";
// import { styled } from "@mui/material/styles";
import { GridToolbar } from "@mui/x-data-grid";

export const ScrollTable = ({ TableHeader, rows, ...restProps }) => {
  // return (
  //   <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //       <HeaderRenderer headerdata={TableHeader} />
  //       <TableBody>
  //         {rows.map((row, i) => (
  //           <TableRow
  //             key={i}
  //             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
  //           >
  //             {Object.entries(row).map(([key, value], index) =>
  //               index === 0 ? (
  //                 <TableCell component="th" scope="row" key={index}>
  //                   {value}
  //                 </TableCell>
  //               ) : (
  //                 <TableCell align="right">{value}</TableCell>
  //               )
  //             )}
  //             {Component && <TableCell>{Component}</TableCell>}
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // );
  return (
    <div style={{ height: 450, width: "80%", marginBottom: "50px" }}>
      <DataGrid
        rows={rows}
        columns={TableHeader}
        pageSize={6}
        rowsPerPageOptions={[rows.lenght]}
        density="comfortable"
        disableColumnMenu={false}
        components={{
          Toolbar: null,
        }}
      />
    </div>
  );
};
