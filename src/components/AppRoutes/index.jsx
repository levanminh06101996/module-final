import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import paths from "../../routes";
import { Route, Routes } from "react-router-dom";
import NoLayout from "../../pages/NoLayout/NoLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {paths.map((path) => {
        const Layout =
          path.layout === undefined ? DefaultLayout : path.layout || NoLayout;
        const Components = path.component;
        return (
          <Route key={path.path} element={<Layout />}>
            <Route path={path.path} element={<Components />} />
          </Route>
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
