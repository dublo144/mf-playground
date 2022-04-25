import React, { createContext, useContext, useState } from "react";

const SideNavContext = createContext([false, () => {}]);

const CollapsedProvider = ({ children }) => {
  return (
    <SideNavContext.Provider value={useState(false)}>
      {children}
    </SideNavContext.Provider>
  );
};

const useSideNavCollapsed = () => {
  const context = useContext(SideNavContext);
  console.log(context);
  if (context === undefined) {
    throw new Error(
      "useSideNavCollapsed must be used within a CollapsedProvider"
    );
  }
  return context;
};

export { CollapsedProvider, useSideNavCollapsed };
