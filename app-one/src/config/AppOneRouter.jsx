import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Page2 from "../components/Page2";

import { CollapsedProvider } from "shell/shellContext";

const AppOneRouter = () => {
  return (
    <CollapsedProvider>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </CollapsedProvider>
  );
};

export default AppOneRouter;
