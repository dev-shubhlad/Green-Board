import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchInstituteCourses } from "../../redux/actions/CourseListAction";
import { Loader } from "../loader/Loader";
import "./CourseList.css";
import { CourseListCard } from "./courseListCard/CourseListCard";

export const CourseList = () => {
  const [value, setValue] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const dispatch = useDispatch();
  const instiCourseList = useSelector((state) => state.instiCourseList);
  const { loading, CourseList, error } = instiCourseList;
  console.log(value);

  const notify = (message) => {
    toast.error(message);
  };

  // setFilteredCourses(CourseList);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (!CourseList) {
      dispatch(fetchInstituteCourses());
    }
  }, []);

  return (
    <div className="course-list-box box-custom-shadow">
      <select
        value={value}
        onChange={handleChange}
        name="course"
        id="course-type"
        style={{ outline: "none" }}
      >
        <option value="">Select Type</option>
        <option value="active">Active Courses</option>
        <option value="pending">Pending Courses</option>
        <option value="unapproved">Unapproved Courses</option>
      </select>
      {error && notify(error)}
      {loading && <Loader />}
      {CourseList &&
        CourseList.map((course) => {
          return <CourseListCard course={course} key={course.id} />;
        })}
    </div>
  );
};
