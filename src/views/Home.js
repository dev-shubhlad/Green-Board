import React from "react";
import { useMediaQuery } from "react-responsive";
import { InstructorHorizontalTab } from "../components/tabs/instructor/InstructorHorizontalTab";
import InstructorVerticalTab from "../components/tabs/instructor/InstructorVerticalTab";

import "./Home.css";

const Home = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <InstructorHorizontalTab />
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <InstructorVerticalTab />
    </div>
  );
};

export default Home;

// import { CourseStructureHorizontalTab } from "../components/tabs/courseStructure/CourseStructureHorizontalTab";
// import CourseStructureVerticalTab from "../components/tabs/courseStructure/CourseStructureVerticalTab";

// const Home = () => {
//   const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

//   return isMobileOrDesktop ? (
//     <div className="mobile-container">
//       <div className="supervisor-mb-list">
//         <CourseStructureHorizontalTab />
//       </div>
//     </div>
//   ) : (
//     <div className="desktop-body container d-flex h-100">
//       {/* <div className="white h-100 .flex-fixed-left-width-item">
//         <InstituteCard />
//       </div>
//       <div className="h-100 flex-fixed-right-width-item">
//         <InstituteProfile />
//         <div>
//           <CourseStructure />
//         </div>
//       </div> */}
//       <CourseStructureVerticalTab />
//     </div>
//   );
// };

// export default Home;
