import React from "react";

const Error = () => {
  sessionStorage.clear();
  return <>error 404</>;
  // window.location.replace(
  //   `https://${process.env.PUBLIC_URL}/info/error.html`
  // );
};

export default Error;
