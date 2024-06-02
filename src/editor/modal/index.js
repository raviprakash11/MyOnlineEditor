import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicSelect from "../select";
import BasicTextFields from "../textfield";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  open,
  setOpen,
  fileName,
  setFileName,
  setFileExtention,
}) {
  const [inputvalue, setInputValue] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [extension, setExtension] = React.useState("");
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(`/${fileName}`);
    setOpen(false);
  };
  const handleReset = () => setInputValue("");

  const handleContinue = () => {
    const newFileName = inputvalue + extension;
    setFileExtention(selectedValue);
    setFileName(newFileName);
    navigate(`/${newFileName}`);
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please enter your file details
            </Typography>
            <IconButton onClick={handleClose}>
              <CancelPresentationIcon />
            </IconButton>
          </Box>

          <BasicTextFields
            setInputValue={setInputValue}
            inputvalue={inputvalue}
          />
          <BasicSelect
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            setExtension={setExtension}
          />
          <Button variant="contained" onClick={handleContinue}>
            Continue
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
