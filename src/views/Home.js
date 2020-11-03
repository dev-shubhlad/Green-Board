import React from "react";
import { InstituteCard } from "../components/InstituteCards/instituteProfileCard/InstituteCard";
import { useMediaQuery } from "react-responsive";

import "./Home.css";
import { InstituteTab } from "../components/tabs/InstituteTab";
import { InstituteProfile } from "../components/InstituteCards/instituteProfile/InstituteProfile";
import { CourseStructure } from "../components/InstituteCards/instituteCourseStructure/CourseStructure";

const Home = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <InstituteCard />

      <div className="supervisor-mb-list">
        <InstituteTab />
      </div>
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <div className="white h-100 .flex-fixed-left-width-item">
        <InstituteCard />
      </div>
      <div className="h-100 flex-fixed-right-width-item">
        {/* <InstituteProfile /> */}
        <div>
          <CourseStructure />
        </div>
      </div>
    </div>
  );
};

export default Home;
