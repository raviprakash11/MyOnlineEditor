import React from "react";
import EditorJS from "./editor";
import BasicModal from "./editor/modal";

function LayoutJS({ fileName, setFileName }) {
  const [open, setOpen] = React.useState(true);
  const [fileExtension, setFileExtention] = React.useState("text");
  const handleOpen = () => setOpen(true);
  return (
    <div className="layout">
      <BasicModal
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        fileName={fileName}
        setFileName={setFileName}
        setFileExtention={setFileExtention}
      />
      <EditorJS
        handleOpen={handleOpen}
        fileName={fileName}
        fileExtension={fileExtension}
      />
    </div>
  );
}

export default LayoutJS;
