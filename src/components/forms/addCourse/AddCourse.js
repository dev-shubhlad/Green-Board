import React from "react";

export const AddCourse = () => {
  return (
    <form>
      <div class="form-group">
        <label for="Name">Course Name</label>
        <input type="text" class="form-control" id="Name" placeholder="Name" />
      </div>
      <div class="form-group">
        <label for="Email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="Email"
          placeholder="Enter email"
        />
      </div>
      <button class="btn btn-primary" style={{ width: "100%" }}>
        Add
      </button>
    </form>
  );
};
