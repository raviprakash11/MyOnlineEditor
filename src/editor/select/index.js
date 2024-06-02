import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { LANG as languages } from "../helper";

export default function BasicSelect({
  selectedValue,
  setSelectedValue,
  setExtension,
}) {
  const handleChange = (event) => {
    setExtension(event.target.value.extension);
    setSelectedValue(event.target.value.language);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">File Extention</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="File Extention"
          onChange={handleChange}
          renderValue={(selected) => (selected ? `${selected}` : "")}
        >
          {languages?.map((language, index) => {
            return (
              <MenuItem value={language} key={index}>
                {language.extension}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
