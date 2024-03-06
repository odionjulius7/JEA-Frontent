import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Select from "@mui/material/Select";

export default function SelectTwo({
  widthx,
  onChange,
  text,
  items,
  name,
  value,
}) {
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <FormControl
      sx={
        {
          //  width: widthx,
          //  height: heightx
        }
      }
    >
      <Select
        name={name}
        value={value}
        onChange={onChange}
        // displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <span> {text}</span>
        </MenuItem>
        {items?.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
