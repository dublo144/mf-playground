import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import SideNav from "../components/SideNav";

import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CollapsedProvider } from "shell/shellContext";
import { Content } from "antd/lib/layout/layout";
import Landing from "../components/Landing";

const App = () => {
  const AppOneRouter = React.lazy(() => import("appOne/AppOneRouter"));

  return (
    <Layout className="h-screen">
      <CollapsedProvider>
        <BrowserRouter>
          <SideNav />
          <Layout>
            <Content>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route index element={<Landing />} />
                  <Route
                    path="appOne/*"
                    element={
                      <React.Suspense fallback={<div>Loading...</div>}>
                        <AppOneRouter />
                      </React.Suspense>
                    }
                  />
                </Routes>
              </React.Suspense>
            </Content>
          </Layout>
        </BrowserRouter>
      </CollapsedProvider>
    </Layout>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
