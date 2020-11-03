import React from "react";
import "./CourseList.css";
import { CourseListCard } from "./courseListCard/CourseListCard";

export const CourseList = () => {
  return (
    <div className="course-list-box box-custom-shadow">
      <select name="course" id="course-type">
        <option value="">Select Type</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <CourseListCard />
      <CourseListCard />
      <CourseListCard />
      <CourseListCard />
    </div>
  );
};
