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
      {/* <div className="white h-100 .flex-fixed-left-width-item">
        <InstituteCard />
      </div>
      <div className="h-100 flex-fixed-right-width-item">
        <InstituteProfile />
        <div>
          <CourseStructure />
        </div>
      </div> */}
      <InstituteVerticalTab />
    </div>
  );
};

export default Institute;
