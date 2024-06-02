import { Editor } from "@monaco-editor/react";

export const LANG = [
  { language: "javaScript", extension: ".js" },
  { language: "typeScript", extension: ".ts" },
  { language: "html", extension: ".html" },
  { language: "css", extension: ".css" },
  { language: "json", extension: ".json" },
  { language: "markdown", extension: ".md" },
  { language: "python", extension: ".py" },
  { language: "java", extension: ".java" },
  { language: "c#", extension: ".cs" },
  { language: "c++", extension: ".cpp" },
  { language: "php", extension: ".php" },
  { language: "ruby", extension: ".rb" },
  { language: "go", extension: ".go" },
  { language: "swift", extension: ".swift" },
  { language: "rust", extension: ".rs" },
  { language: "kotlin", extension: ".kt" },
  { language: "scala", extension: ".scala" },
  { language: "perl", extension: ".pl" },
  { language: "lua", extension: ".lua" },
  { language: "shell script", extension: ".sh" },
  { language: "text", extension: ".txt" },
];

export function getEditorJS({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="javascript"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorTS({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="typescript"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorHTML({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="html"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorCSS({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="css"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorJSON({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="json"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorMD({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="markdown"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorPY({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="python"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorJAVA({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="java"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorCSharp({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="c#"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorCPP({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="cpp"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorPHP({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="php"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorRUBY({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="ruby"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorGO({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="go"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorSwift({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="swift"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorRust({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="rust"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorKT({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="kotlin"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorScala({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="scala"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorPERL({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="perl"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorLUA({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="lua"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorShell({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="shell script"
      onChange={handleEditorChange}
    />
  );
}

export function getEditorText({ handleEditorChange }) {
  return (
    <Editor
      height="100%"
      width="100%"
      defaultLanguage="text"
      onChange={handleEditorChange}
    />
  );
}
