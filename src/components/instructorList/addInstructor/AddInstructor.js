import React, { useState } from "react";
import Add from "../../../assets/images/icons/add.svg";
import { Popup } from "../../popup/Popup";
import { AddInstructorForm } from "../../forms/addInstructor/AddInstructorForm";

export const AddInstructor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  console.log(openPopup);
  return (
    <div>
      <div className="row add-supervisor d-flex align-items-center">
        <p>Add New Instructor</p>
        <img
          src={Add}
          className="ml-auto add-button"
          onClick={() => setOpenPopup(!openPopup)}
        />
      </div>
      <Popup
        title="Add New Supervisor"
        openPopup={openPopup}
        setPopup={setOpenPopup}
      >
        <AddInstructorForm />
      </Popup>
    </div>
  );
};
