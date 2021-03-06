import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InstructorProfileCard } from "./instructorProfileCard/InstructorProfileCard";
import { fetchInstructorList } from "../../redux/actions/InstructorListAction";

export const InstructorList = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  const listOfInstructor = useSelector((state) => state.listOfInstructor);

  const { loadin, instructorList, error } = listOfInstructor;

  const notify = (message) => {
    toast.error(message);
  };

  useEffect(() => {
    if (!instructorList) {
      dispatch(fetchInstructorList());
    }
  }, []);

  return (
    <>
      {error && notify(error)}
      <div className="list-title">
        <p>Instructors</p>
      </div>
      <ToastContainer closeButton={false} />
      {loadin && <Loader />}
      {instructorList &&
        instructorList.map((instructor) => {
          return (
            <InstructorProfileCard
              user={instructor.instructor}
              key={instructor._id}
            />
          );
        })}
    </>
  );
};
