import React from "react";
import { EnrollNewStudent } from "../enrollNewStudent/EnrollNewStudent";
import { StudentList } from "../studentList/StudentList";
import "./enrolledStudents.css";

export const EnrolledStudents = () => {
  return (
    <div>
      <EnrollNewStudent />

      <div id="outer">
        <div className="inner">
          <button type="submit" className="course-filter-btn selected">
            All
          </button>
        </div>
        <div className="inner">
          <button type="submit" className="course-filter-btn">
            Regular
          </button>
        </div>
        <div className="inner">
          <button className="course-filter-btn">Distance</button>
        </div>
      </div>

      <StudentList />
    </div>
  );
};
