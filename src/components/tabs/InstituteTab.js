import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { InstituteProfile } from "../InstituteCards/instituteProfile/InstituteProfile";
import { CourseStructure } from "../InstituteCards/instituteCourseStructure/CourseStructure";

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
  },
  seleced: {
    border: "none",
  },
}));

export const InstituteTab = () => {
  const [value, setValue] = useState(0);

  const classes = useStyles();
  const tabClasses = useTabStyles();

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <div className={classes.root}>
        <AntTabs value={value} onChange={handleTabs}>
          <Tab label="PROFILE" classes={tabClasses} />
          <Tab label="COURSE STRUCTURE" classes={tabClasses} />
        </AntTabs>

        <TabPanel value={value} index={0}>
          <InstituteProfile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CourseStructure />
        </TabPanel>
      </div>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}
