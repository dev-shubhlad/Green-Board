import React from "react";
import { useMediaQuery } from "react-responsive";

import "./courseStructure.css";
import { CourseStructureHorizontalTab } from "../../components/tabs/courseStructure/CourseStructureHorizontalTab";
import CourseStructureVerticalTab from "../../components/tabs/courseStructure/CourseStructureVerticalTab";

const CourseStructure = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <div className="supervisor-mb-list">
        <CourseStructureHorizontalTab />
      </div>
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <CourseStructureVerticalTab />
    </div>
  );
};

export default CourseStructure;
