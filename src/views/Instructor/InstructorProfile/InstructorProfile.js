import React from "react";
import { useMediaQuery } from "react-responsive";
import { InstructorHorizontalTab } from "../../../components/tabs/instructor/InstructorHorizontalTab";
import InstructorVerticalTab from "../../../components/tabs/instructor/InstructorVerticalTab";

import "./insructorProfile.css";

const InstructorProfile = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <InstructorHorizontalTab />
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <InstructorVerticalTab />
    </div>
  );
};

export default InstructorProfile;
