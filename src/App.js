import React from "react";
import RouterJS from "./router";

function App() {
  const [fileName, setFileName] = React.useState("test.txt");
  return (
    <div className="App">
      <RouterJS fileName={fileName} setFileName={setFileName} />
      {/* <LanguageSelect /> */}
    </div>
  );
}

export default App;
