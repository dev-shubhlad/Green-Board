import React, { useState } from "react";
import DP from "../../assets/images/shubham_lad.jpg";
import Edit from "../../assets/images/icons/Editicon.svg";
import "./ProfileCard.css";
import { Popup } from "../popup/Popup";
import { EditUserProfile } from "../forms/editProfile/EditUserProfile";

export const ProfileCard = (props) => {
  const { user, rmbutton, edit, removeUser } = props;

  const [openPopup, setOpenPopup] = useState(false);

  const confirmDelete = (user) => {
    var result = window.confirm(`Want to delete ${user.name}`);
    if (result) {
      removeUser(user.id);
    }
  };

  return (
    <div className="user-card">
      <div className="row">
        <div className="col-3 d-flex align-items-center ">
          <img src={DP} className="profile-image" alt={"shubham"} />
        </div>
        <div className="col-9">
          <span className="title">{user.name}</span>
          <br />
          <span>Address</span>
          <br />
          <span>{user.email}</span>
          <br />
          <span>7249148567</span>
          <span className="badge badge-secondary position-badge">
            {user.role}
          </span>
        </div>
        {edit && (
          <img
            src={Edit}
            className="editProfile"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenPopup(!openPopup)}
          />
        )}
      </div>
      {rmbutton && (
        <div className="row">
          <span
            className="rm-btn"
            onClick={() => confirmDelete(user)}
            style={{ cursor: "pointer" }}
          >
            REMOVE
          </span>
        </div>
      )}

      <Popup title="Edit Profile" openPopup={openPopup} setPopup={setOpenPopup}>
        <EditUserProfile userInfo={user} setPopup={setOpenPopup} />
      </Popup>
    </div>
  );
};

ProfileCard.defaultProps = {
  edit: false,
  rmbutton: true,
};
