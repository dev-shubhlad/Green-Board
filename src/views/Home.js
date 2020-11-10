import React from "react";
import { useMediaQuery } from "react-responsive";

import "./Home.css";
import { StudentListHorizontalTab } from "../components/tabs/students/StudentList/StudentListHorizontalTab";
import StudentListVerticalTab from "../components/tabs/students/StudentList/StudentListVerticalTab";

const Institute = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <StudentListHorizontalTab />
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <StudentListVerticalTab />
    </div>
  );
};

export default Institute;



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
