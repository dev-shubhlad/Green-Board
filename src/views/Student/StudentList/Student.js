import React from "react";
import { useMediaQuery } from "react-responsive";

import { StudentListHorizontalTab } from "../../../components/tabs/students/StudentList/StudentListHorizontalTab";
import StudentListVerticalTab from "../../../components/tabs/students/StudentList/StudentListVerticalTab";

const Student = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <StudentListHorizontalTab />
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <StudentListVerticalTab />
    </div>
  );
};

export default Student;
