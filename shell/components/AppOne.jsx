import React from "react";

const AppOne = () => {
  const App = React.lazy(() => import("app-one/App"));

  return <App basename="appOne" />;
};

export default AppOne;
