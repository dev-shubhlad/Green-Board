import React, { useState } from "react";
import "./addSupervisor.css";
import Add from "../../assets/images/icons/add.svg";
import { Popup } from "../popup/Popup";
import { AddForm } from "../forms/addSupervisor/AddSupervisor";

export const AddSupervisor = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div>
      <div className="row add-supervisor d-flex align-items-center">
        <p>Add new supervisor</p>
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
        <AddForm />
      </Popup>
    </div>
  );
};
