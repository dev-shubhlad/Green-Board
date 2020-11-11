import React from "react";
import { useMediaQuery } from "react-responsive";
import { StudentHorizontalTab } from "../../../components/tabs/students/StudentProfile/StudentHorizontalTab";
import StudentVerticalTab from "../../../components/tabs/students/StudentProfile/StudentVerticalTab";

const StudentProfile = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <StudentHorizontalTab />
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <StudentVerticalTab />
    </div>
  );
};

export default StudentProfile;
