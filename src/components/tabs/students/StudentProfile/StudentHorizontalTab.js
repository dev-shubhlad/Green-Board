import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { InstructorCard } from "../../../instructorList/instructorCard/InstructorCard";
import { Attendance } from "../../../instructorList/Attendance/Attendance";
import { StudentCourseList } from "../../../Student/StudentCourseList/StudentCourseList";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#000000",
    borderBottom: "3px solid black",
  },
})(Tabs);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const useTabStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    "&.Mui-selected": {
      outline: "none",
    },
  },
  seleced: {
    border: "none",
  },
}));

export const StudentHorizontalTab = () => {
  const [value, setValue] = useState(0);

  const classes = useStyles();
  const tabClasses = useTabStyles();

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <InstructorCard />
      <div className="supervisor-mb-list">
        <div className={classes.root}>
          <AntTabs value={value} onChange={handleTabs}>
            <Tab label="COURSES ASSIGNED" classes={tabClasses} />
            <Tab label="ATTENDANCE" classes={tabClasses} />
          </AntTabs>

          <TabPanel value={value} index={0}>
            <StudentCourseList />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Attendance />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
