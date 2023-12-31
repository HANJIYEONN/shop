import React from "react";
import Detail from "../page/Detail/Detail";
import Main from "../page/Main/Main";
import Error from "../page/Error/Error";
import About from "../page/About";
import Event from "../page/Event";
import One from "../page/Event/One";
import Two from "../page/Event/Two";
import Cart from "../page/Cart";

const publicRoutes = [
  { path: "/", component: <Main />, name: "홈" },
  { path: "/error", component: <Error /> },
  { path: "*", component: <Error /> },

  //상세 페이지
  { path: "/detail", component: <Detail />, name: "상세페이지" },
  { path: "/detail/:id", component: <Detail /> },

  { path: "/cart", component: <Cart />, name: "장바구니" },

  //about 페이지
  { path: "/about", component: <About />, name: "about" },
  {
    path: "member",
    component: <div>맴버임</div>,
    upper: "/about",
  },
  {
    path: "location",
    component: <div>location</div>,
    upper: "/about",
  },

  //event 페이지
  { path: "/event", component: <Event />, name: "event" },
  {
    path: "one",
    component: <One />,
    upper: "/event",
  },
  {
    path: "two",
    component: <Two />,
    upper: "/event",
  },
];

export { publicRoutes };
