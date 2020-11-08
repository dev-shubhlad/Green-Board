import React from "react";
import { StudentProfileCard } from "../../studentCards/profileCards/StudentProfileCard";

export const StudentList = () => {
  return (
    <>
      <div className="list-title">
        <p>Total Students Enrolled (105) </p>
      </div>
      <StudentProfileCard />
      <StudentProfileCard />
    </>
  );
};
