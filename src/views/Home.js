import React from "react";
import { InstituteCard } from "../components/InstituteCards/instituteProfileCard/InstituteCard";
import { useMediaQuery } from "react-responsive";

import "./Home.css";
import { InstituteHorizontalTab } from "../components/tabs/InstituteHorizontalTab";
import { CourseStructure } from "../components/InstituteCards/instituteCourseStructure/CourseStructure";
import InstituteVerticalTab from "../components/tabs/InstituteVerticalTab";

const Home = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <div className="supervisor-mb-list">
        <InstituteHorizontalTab />
      </div>
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      {/* <div className="white h-100 .flex-fixed-left-width-item">
        <InstituteCard />
      </div>
      <div className="h-100 flex-fixed-right-width-item">
        <InstituteProfile />
        <div>
          <CourseStructure />
        </div>
      </div> */}
      <InstituteVerticalTab />
    </div>
  );
};

export default Home;
