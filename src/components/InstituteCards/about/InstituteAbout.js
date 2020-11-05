import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../loader/Loader";

import "./InstituteAbout.css";

export const InstituteAbout = () => {
  const dispatch = useDispatch();
  const institute = useSelector((state) => state.institute);
  const { loading, instituteInfo, error } = institute;
  console.log("from About: ", instituteInfo);

  return (
    <div className="box-custom-shadow intitute-about">
      {loading && <Loader />}
      {instituteInfo && (
        <>
          <div className="aboute-title">
            <p>About</p>
          </div>
          <div>
            <p>{instituteInfo.institute.aboutUs.description}</p>
            <p>Mail Id: {instituteInfo.institute.aboutUs.supportEmail}</p>
            <p>Contact: {instituteInfo.institute.aboutUs.supportNumber}</p>
          </div>
        </>
      )}
    </div>
  );
};
