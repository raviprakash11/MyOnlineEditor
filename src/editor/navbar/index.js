import React from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import EditIcon from "@mui/icons-material/Edit";
// import MenuBox from "../menu-box";

function NavbarJS({ saveAsJSON, handleOpen, fileName }) {
  const handleSave = () => {
    saveAsJSON();
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div
      style={{
        padding: "16px 20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <div style={{ fontWeight: "700" }}>MyOnlineEditor</div>
        <div>/</div>
        <div>{fileName}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
          }}
          onClick={handleOpen}
        >
          <EditIcon />
          <div>File Name</div>
        </div>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            alignItems: "center",
          }}
          onClick={handleSave}
        >
          <SaveAltIcon />
          <div>Save</div>
        </div>
        {/* <MenuBox anchorEl={anchorEl} open={open} handleClose={handleClose} /> */}
        {/* <div style={{ cursor: "pointer" }} onClick={handleClick}>
          Share
        </div> */}
      </div>
    </div>
  );
}

export default NavbarJS;
