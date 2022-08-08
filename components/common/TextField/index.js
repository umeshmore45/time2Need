import { InputLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, TextField } from "./textfield.style";

export const InputField = ({
  label,
  datePicker = false,
  select = false,
  children,
  ...restProps
}) => {
  return !datePicker ? (
    !select ? (
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        {...restProps}
      />
    ) : (
      <Select labelId="topics" id="topic" label={label} {...restProps}>
        {children}
      </Select>
    )
  ) : (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        renderInput={(params) => <TextField {...params} />}
        {...restProps}
      />
    </LocalizationProvider>
  );
};
