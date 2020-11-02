import React from "react";
import FeaturedImage from "./poster.jpg";

import "./InstituteFeatured.css";

export const InstituteFeatured = () => {
  return (
    <div className="box-custom-shadow intitute-about">
      <div className="aboute-title">
        <p>Featured</p>
      </div>
      <div className="row">
        <div className="col-6 featured-image-box">
          <img
            className="featured-img"
            src={FeaturedImage}
            alt="Featured Image"
          />
        </div>
        <div className="col-6">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};
