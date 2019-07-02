import React from "react";
import Header from "./Header";

const Sitewrapper = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export default Sitewrapper;
