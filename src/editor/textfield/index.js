import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ inputValue, setInputValue }) {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="File Name"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
    </Box>
  );
}
