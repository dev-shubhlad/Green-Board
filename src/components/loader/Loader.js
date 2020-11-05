import React from "react";

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center" style={{ width: "100%" }}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
