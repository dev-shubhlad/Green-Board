import React from "react";
import { useMediaQuery } from "react-responsive";

import "./institute.css";
import { InstituteHorizontalTab } from "../../components/tabs/institute/InstituteHorizontalTab";
import InstituteVerticalTab from "../../components/tabs/institute/InstituteVerticalTab";

const Institute = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <InstituteHorizontalTab />
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <InstituteVerticalTab />
    </div>
  );
};

export default Institute;
