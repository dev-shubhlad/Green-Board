import React from "react";
// import { CourseListCard } from "../../courseList/courseListCard/CourseListCard";
import { InstrcutorCourseCard } from "../instrcutorCourseCard/InstrcutorCourseCard";

export const InstructorCourseList = () => {
  return (
    <div className="box-custom-shadow">
      <InstrcutorCourseCard />
      <InstrcutorCourseCard />
      <InstrcutorCourseCard />
      <InstrcutorCourseCard />
    </div>
  );
};
