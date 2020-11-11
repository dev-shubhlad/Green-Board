import React from "react";
import { EnrollInCourse } from "../EnrollInCourse/EnrollInCourse";
// import { CourseListCard } from "../../courseList/courseListCard/CourseListCard";
import { StudentCourseCard } from "../StudentCourseCard/StudentCourseCard";

export const StudentCourseList = () => {
  return (
    <>
      <div style={{ marginBottom: "5px" }}>
        <EnrollInCourse />
      </div>
      <div className="box-custom-shadow">
        <StudentCourseCard />
        <StudentCourseCard />
        <StudentCourseCard />
        <StudentCourseCard />
      </div>
    </>
  );
};
