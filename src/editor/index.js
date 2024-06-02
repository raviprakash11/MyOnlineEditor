import React, { useRef } from "react";
import NavbarJS from "./navbar";
import MonacoEditor from "./editor";
import { saveAs } from "file-saver";

function EditorJS({ handleOpen, fileName, fileExtension }) {
  const editorRef = useRef(null);

  const handleEditorChange = (value, event) => {
    editorRef.current = value;
  };

  const saveAsJSON = () => {
    const content = editorRef.current || "{}";
    const blob = new Blob([content], { type: `application/${fileExtension}` });
    saveAs(blob, fileName);
  };
  return (
    <div className="EditorJS">
      <NavbarJS
        saveAsJSON={saveAsJSON}
        handleOpen={handleOpen}
        fileName={fileName}
      />
      <MonacoEditor
        handleEditorChange={handleEditorChange}
        fileExtension={fileExtension}
      />
    </div>
  );
}

export default EditorJS;
