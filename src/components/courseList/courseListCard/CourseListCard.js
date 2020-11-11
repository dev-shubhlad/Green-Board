import React from "react";
import { Link } from "react-router-dom";
import "./CourseListCard.css";

export const CourseListCard = ({ course }) => {
  return (
    <div className="user-card course-list-card">
      <div className="">
        <span className="course-title">{course.name}</span>
        <br />
        <span className="rating">
          4.8 <span className="total-rating">(87 Ratings)</span>
        </span>
        {course.category.length > 0 &&
          course.category.map((category) => (
            <span className="badge badge-secondary course-badge">
              {category}
            </span>
          ))}
        <br />
        <span className="badge badge-secondary category-badge">
          {course.courseType}
        </span>
        <span className="course-type">
          {course.isDeleted ? "Inactive" : "Active"}
        </span>
        <br />
        <span className="instructor-name">Prakash Kumar</span>
      </div>
      <div className="row">
        <Link
          to={`/institute/course/${course.id}`}
          className="rm-btn course-lst-btn"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};

{
  /* <div className="user-card course-list-card">
  <div className="">
    <span className="course-title">English Class X - Section A</span>
    <br />
    <span className="rating">
      4.8 <span className="total-rating">(87 Ratings)</span>
    </span>
    <span className="badge badge-secondary course-badge">Class X</span>
    <br />
    <span className="badge badge-secondary category-badge">PRIVATE</span>
    <span className="course-type">Active</span>
    <br />
    <span className="instructor-name">Prakash Kumar</span>
  </div>
  <div className="row">
    <Link to="/institute/course/12345" className="rm-btn course-lst-btn">
      VIEW DETAILS
    </Link>
  </div>
</div>; */
}
