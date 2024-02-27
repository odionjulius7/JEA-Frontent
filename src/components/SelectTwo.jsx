import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Select from "@mui/material/Select";

export default function SelectTwo({ widthx, heightx, text }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
        value={age}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <span> {text}</span>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* <FormHelperText>Without label</FormHelperText> */}
    </FormControl>
  );
}
