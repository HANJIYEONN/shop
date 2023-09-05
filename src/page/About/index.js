import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h4>어바웃 페이지입니다</h4>
      <Outlet></Outlet>
    </>
  );
}

export default About;
