import React from "react";

import HeadImage from "../../../assets/images/shubham_lad.jpg";

export const InstituteHead = () => {
  return (
    <div className="box-custom-shadow intitute-about">
      <div className="aboute-title">
        <p>Institute Head</p>
      </div>
      <div className="row">
        <div className="col-4 featured-image-box">
          <img
            className="head-img"
            style={{
              maxWidth: "100%",
              margin: "auto",
            }}
            src={HeadImage}
            alt="Featured Image"
          />
        </div>
        <div className="col-8">
          <p>Head Name</p>
          <p>Qualification/Experiance</p>
          <p>Message:</p>
        </div>
      </div>
    </div>
  );
};
