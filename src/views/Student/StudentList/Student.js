import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { StudentListHorizontalTab } from "../../../components/tabs/students/StudentList/StudentListHorizontalTab";
import StudentListVerticalTab from "../../../components/tabs/students/StudentList/StudentListVerticalTab";
import { fetchStudentList } from "../../../redux/actions/StudentListAction";

const Student = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  const dispatch = useDispatch();
  const listOfStudent = useSelector((state) => state.listOfStudent);

  const { loadin, studentList, error } = listOfStudent;

  useEffect(() => {
    if (!studentList) {
      dispatch(fetchStudentList());
    }
  }, []);

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
