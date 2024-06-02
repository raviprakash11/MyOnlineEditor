import React from "react";
import {
  getEditorCPP,
  getEditorCSS,
  getEditorCSharp,
  getEditorGO,
  getEditorHTML,
  getEditorJAVA,
  getEditorJS,
  getEditorJSON,
  getEditorKT,
  getEditorLUA,
  getEditorMD,
  getEditorPERL,
  getEditorPHP,
  getEditorPY,
  getEditorRUBY,
  getEditorRust,
  getEditorScala,
  getEditorShell,
  getEditorSwift,
  getEditorTS,
  getEditorText,
} from "../helper";

export default function MyEditor({ handleEditorChange, fileExtension }) {
  return (
    <div>
      <div style={{ height: "90vh", border: "1px solid #ddd" }}>
        {fileExtension === "javaScript" && getEditorJS({ handleEditorChange })}
        {fileExtension === "typeScript" && getEditorTS({ handleEditorChange })}
        {fileExtension === "html" && getEditorHTML({ handleEditorChange })}
        {fileExtension === "css" && getEditorCSS({ handleEditorChange })}
        {fileExtension === "json" && getEditorJSON({ handleEditorChange })}
        {fileExtension === "markdown" && getEditorMD({ handleEditorChange })}
        {fileExtension === "python" && getEditorPY({ handleEditorChange })}
        {fileExtension === "java" && getEditorJAVA({ handleEditorChange })}
        {fileExtension === "c#" && getEditorCSharp({ handleEditorChange })}
        {fileExtension === "c++" && getEditorCPP({ handleEditorChange })}
        {fileExtension === "php" && getEditorPHP({ handleEditorChange })}
        {fileExtension === "ruby" && getEditorRUBY({ handleEditorChange })}
        {fileExtension === "go" && getEditorGO({ handleEditorChange })}
        {fileExtension === "swift" && getEditorSwift({ handleEditorChange })}
        {fileExtension === "rust" && getEditorRust({ handleEditorChange })}
        {fileExtension === "kotlin" && getEditorKT({ handleEditorChange })}
        {fileExtension === "scala" && getEditorScala({ handleEditorChange })}
        {fileExtension === "perl" && getEditorPERL({ handleEditorChange })}
        {fileExtension === "lua" && getEditorLUA({ handleEditorChange })}
        {fileExtension === "shell script" &&
          getEditorShell({ handleEditorChange })}
        {fileExtension === "text" && getEditorText({ handleEditorChange })}
      </div>
    </div>
  );
}
