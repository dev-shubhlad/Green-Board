import React from "react";
import { useMediaQuery } from "react-responsive";
import { AddSupervisor } from "../components/addSupervisor/AddSupervisor";
import { AddInstructor } from "../components/instructorList/addInstructor/AddInstructor";
import { InstructorList } from "../components/instructorList/InstructorList";
import { SupervisorList } from "../components/supervisorList/SupervisorList";

import "./Home.css";

const Home = () => {
  const isMobileOrDesktop = useMediaQuery({ maxWidth: 600 });

  return isMobileOrDesktop ? (
    <div className="mobile-container">
      <div className="intructor-page-title box-custom-shadow">Instructors</div>
      <div className="supervisor-mb-add">
        <AddInstructor />
      </div>
      <div className="supervisor-mb-list">
        <InstructorList />
      </div>
    </div>
  ) : (
    <div className="desktop-body container d-flex h-100">
      <div className="white h-100 .flex-fixed-left-width-item">
        <div className="intructor-page-title box-custom-shadow">
          Instructors
        </div>
      </div>
      <div className="h-100 flex-fixed-right-width-item">
        <AddInstructor />
        <div className="supervisor-list">
          <InstructorList />
        </div>
      </div>
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
