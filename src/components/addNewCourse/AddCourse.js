import React, { useState } from "react";
import Add from "../../assets/images/icons/add.svg";
import { Popup } from "../popup/Popup";
import { AddCourse } from "../forms/addCourse/AddCourse";

export const AddCourrse = () => {
  const [openPopup, setOpenPopup] = useState(false);
  console.log(openPopup);
  return (
    <div>
      <div className="row add-supervisor d-flex align-items-center">
        <p>Create New Course</p>
        <img
          src={Add}
          className="ml-auto add-button"
          onClick={() => setOpenPopup(!openPopup)}
        />
      </div>
      <Popup
        title="Create New Course"
        openPopup={openPopup}
        setPopup={setOpenPopup}
      >
        <AddCourse />
      </Popup>
    </div>
  );
};
