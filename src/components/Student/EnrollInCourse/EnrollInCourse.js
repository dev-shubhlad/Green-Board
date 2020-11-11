import React, { useState } from "react";
import Add from "../../../assets/images/icons/add.svg";
import { Popup } from "../../popup/Popup";

export const EnrollInCourse = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      <div className="row add-supervisor d-flex align-items-center">
        <p>Enroll In New Course</p>
        <img
          src={Add}
          className="ml-auto add-button"
          onClick={() => setOpenPopup(!openPopup)}
        />
      </div>
      <Popup
        title="Enroll new Student"
        openPopup={openPopup}
        setPopup={setOpenPopup}
      >
        Enroll In New Course
      </Popup>
    </div>
  );
};
