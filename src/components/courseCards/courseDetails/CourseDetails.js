import React from "react";
import "./courseDetails.css";

export const CourseDetails = () => {
  return (
    <div className="user-card course-list-card">
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
      <div>
        <p>Course Description </p>
        <p>
          D.A.V. Public School - India is an education management company based
          out of India founded in the year 1990.
        </p>
        <p className="course-timing">Aug 10, 2020 - Feb 2021 </p>
        <div className="row week-time">
          <div className="col-3">
            <p>Shedule</p>
          </div>
          <div className="col-9">
            <p> Wed | 1:00 PM - 1:40 PM </p>
            <p> Wed | 1:00 PM - 1:40 PM </p>
            <p> Wed | 1:00 PM - 1:40 PM </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>105 Students Enrolled </p>
          </div>
          <div className="col-6">
            <p> 25 Seats Left for Distance Learner</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Subscription Fee </p>
          </div>
          <div className="col-6">
            <p className="offer-price"> Rs. 285/m </p>
            <p>
              <span className="actual-price">Rs. 300</span>
              <span className="discount">5% OFF</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="course-btn course-btn-success">EDIT COURSE DETAILS</div>
        <div className="course-btn course-btn-danger">DELETE COURSE </div>
      </div>
    </div>
  );
};
