import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutJS from "./layout";
import NotFound from "./notfound";

const RouterJS = ({ fileName, setFileName }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<LayoutJS fileName={fileName} setFileName={setFileName} />}
        />
        <Route
          exact
          path={`/${fileName}`}
          element={<LayoutJS fileName={fileName} setFileName={setFileName} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterJS;
