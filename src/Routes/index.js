import React from "react";
import { publicRoutes } from "./allRoutes";
import { Routes, Route } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Index = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, idx) => {
          if (!route.upper) {
            return (
              <Route
                path={route.path}
                element={route.component}
                key={idx}
                exact={true}
              >
                {publicRoutes.map((lower, i) => {
                  if (route.path === lower.upper) {
                    return (
                      <Route
                        path={lower.path}
                        element={lower.component}
                        key={i}
                        exact={true}
                      ></Route>
                    );
                  }
                })}
              </Route>
            );
          }
          return null;
        })}
      </Routes>
    </>
  );
};

export default Index;
