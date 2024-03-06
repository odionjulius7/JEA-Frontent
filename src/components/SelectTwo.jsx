import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SelectTwo({
  widthx,
  onChange,
  text,
  items,
  name,
  value,
}) {
  return (
    <FormControl
      sx={
        {
          /* Add any additional styles here */
        }
      }
    >
      <Select
        name={name}
        value={value}
        onChange={onChange}
        inputProps={{ "aria-label": "Without label" }}
        displayEmpty
      >
        <MenuItem value="" disabled>
          {text}
        </MenuItem>
        {items?.map((item) => (
          <MenuItem key={item} value={String(item)}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
