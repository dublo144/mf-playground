import React from "react";

import "./index.scss";
import AppOneRouter from "./config/AppOneRouter";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <AppOneRouter />
    </div>
  );
};

export default App;
