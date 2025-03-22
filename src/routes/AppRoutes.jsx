import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../layouts/DefaultLayout";
import { path } from "../constants/path";
import About from "../pages/About";
import NotFound from "../components/errors/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={path.home} element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path={path.about} element={<About />} />
        </Route>
        <Route path={path.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
