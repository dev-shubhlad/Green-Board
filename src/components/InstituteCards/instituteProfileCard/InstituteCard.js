import React, { useEffect, useState } from "react";
import DP from "../../../assets/images/shubham_lad.jpg";
import Edit from "../../../assets/images/icons/Editicon.svg";
import "./InstituteCard.css";
import { useDispatch, useSelector } from "react-redux";
import { getInstituteDetails } from "../../../redux/actions/ProfileAction";
import { Loader } from "../../loader/Loader";
import { Popup } from "../../popup/Popup";
import { EditInstituteProfile } from "../../forms/editProfile/EditInstituteProfile";
import { ToastContainer } from "react-toastify";

export const InstituteCard = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();
  const institute = useSelector((state) => state.institute);
  const { loading, instituteInfo, error } = institute;
  console.log(instituteInfo);

  useEffect(() => {
    if (!instituteInfo) {
      dispatch(getInstituteDetails());
    }
  }, []);

  return (
    <div className="institute-card box-custom-shadow">
      {loading && <Loader />}
      {instituteInfo && (
        <>
          <div className="row">
            <div className="col-3 d-flex align-items-center ">
              <img src={DP} className="profile-image" alt={"shubham"} />
            </div>
            <div className="col-9">
              <span className="title">{instituteInfo.institute.name}</span>
              <br />
              <span>Address</span>
              <br />
              <span className="badge badge-secondary institute-badge">
                {instituteInfo.institute.type.toUpperCase()}
              </span>
            </div>
            <img
              src={Edit}
              className="editProfile"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenPopup(!openPopup)}
            />
          </div>

          <Popup
            title="Edit Institute Profile"
            openPopup={openPopup}
            setPopup={setOpenPopup}
          >
            <EditInstituteProfile
              instituteInfo={instituteInfo.institute}
              setPopup={setOpenPopup}
            />
          </Popup>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
