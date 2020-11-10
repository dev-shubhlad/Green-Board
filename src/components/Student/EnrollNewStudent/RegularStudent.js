import React from "react";
import { StudentList } from "../../courseCards/studentList/StudentList";
import { AddRegularStudent } from "../AddNewStudent/AddRegularStudent";

import "./regularStudent.css";

export const RegularStudent = () => {
  return (
    <div>
      <div style={{ margin: "5px 0" }}>
        <AddRegularStudent />
      </div>
      <form class="form-inline my-2 my-lg-0 search-container">
        <div class="input-group search-box">
          <input
            class="form-control"
            id="search-bar"
            type="search"
            placeholder="Search Student by name"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-search" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div style={{ margin: "10px 0" }}>
        <StudentList />
      </div>
    </div>
  );
};
