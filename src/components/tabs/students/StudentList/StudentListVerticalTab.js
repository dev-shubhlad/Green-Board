import React, { PureComponent } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import { InstituteCard } from "../../../InstituteCards/instituteProfileCard/InstituteCard";
import { CourseStructure } from "../../../InstituteCards/instituteCourseStructure/CourseStructure";
import { InstituteProfile } from "../../../InstituteCards/instituteProfile/InstituteProfile";
import { RegularStudent } from "../../../Student/EnrollNewStudent/RegularStudent";
import { DistanceStudent } from "../../../Student/EnrollNewStudent/DistanceStudent";

class StudentListVerticalTab extends PureComponent {
  state = { activeIndex: 0 };

  handleChange = (_, activeIndex) => this.setState({ activeIndex });
  render() {
    const { activeIndex } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <div className="row">
          <div className="white h-100 .flex-fixed-left-width-item box-custom-shadow">
            <div className="intructor-page-title box-custom-shadow">
              Students
            </div>
            <VerticalTabs value={activeIndex} onChange={this.handleChange}>
              <MyTab label="REGULAR" />
              <MyTab label="DISTANCE" />
            </VerticalTabs>
          </div>
          <div className="h-100 flex-fixed-right-width-item">
            {activeIndex === 0 && <RegularStudent />}
            {activeIndex === 1 && <DistanceStudent />}
          </div>
        </div>
      </div>
    );
  }
}

const VerticalTabs = withStyles((theme) => ({
  flexContainer: {
    flexDirection: "column",
  },
  indicator: {
    display: "none",
  },
}))(Tabs);

const MyTab = withStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    borderTop: "1px solid #D8D8D8",
    minWidth: "100%",
    "&.Mui-selected": {
      outline: "none",
    },
  },
  wrapper: {
    backgroundColor: "#fff",
    padding: "5px",
  },
  selected: {
    color: "#0FBC71",
    borderRight: "5px solid #0FBC71",
  },
}))(Tab);

export default StudentListVerticalTab;
