import React from "react";
import { AddCourrse } from "../../addNewCourse/AddCourse";
import { CourseList } from "../../courseList/CourseList";

export const CourseStructure = () => {
  return (
    <div>
      <div>
        <AddCourrse />
        <CourseList />
      </div>
    </div>
  );
};
