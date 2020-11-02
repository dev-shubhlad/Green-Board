import React from "react";
import { InstituteAbout } from "../about/InstituteAbout";
import { InstituteFeatured } from "../featured/InstituteFeatured";
import { InstituteHead } from "../head/InstituteHead";

import "./InstituteProfile.css";

export const InstituteProfile = () => {
  return (
    <div>
      <div className="card-margin">
        <InstituteAbout />
      </div>
      <div className="card-margin">
        <InstituteFeatured />
      </div>
      <div className="card-margin">
        <InstituteHead />
      </div>
    </div>
  );
};
