import React from "react";

export const AddCourse = () => {
  return (
    <form>
      <div className="form-group">
        <label for="Name">Course Name</label>
        <input
          type="text"
          className="form-control"
          id="Name"
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <label for="Email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="Email"
          placeholder="Enter email"
        />
      </div>
      <button className="btn btn-primary" style={{ width: "100%" }}>
        Add
      </button>
    </form>
  );
};
