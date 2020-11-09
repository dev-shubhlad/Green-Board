import React from "react";
import "./attendance.css";

export const Attendance = () => {
  return (
    <div>
      <div className="box-custom-shadow attendance">
        <div></div>
        <div className="attendance-title">English Class X - Section A</div>
        <div className="report-date">Report Of October, 2020</div>
        <div>Total Classes Scheduled 24 </div>
        <div>Total Present 10 | Total Absent 0</div>
      </div>

      <div className="box-custom-shadow attendance-list">
        <div className="row">
          <div className="col-3 attendance-heading">Date</div>
          <div className="col-3 attendance-heading">Status</div>
          <div className="col-3 attendance-heading">Scheduled Time</div>
          <div className="col-3 attendance-heading">Joined At</div>
        </div>
        <div className="row attendance-row">
          <div className="col-3 attendance-data">1 | THU</div>
          <div className="col-3 attendance-data">PRESENT</div>
          <div className="col-3 attendance-data">11:00AM</div>
          <div className="col-3 attendance-data">11:02AM</div>
        </div>
        <div className="row attendance-row">
          <div className="col-3 attendance-data">1 | THU</div>
          <div className="col-3 attendance-data absent">ABSENT</div>
          <div className="col-3 attendance-data">11:00AM</div>
          <div className="col-3 attendance-data">11:02AM</div>
        </div>
        <div className="row attendance-row">
          <div className="col-3 attendance-data">1 | THU</div>
          <div className="col-3 attendance-data">PRESENT</div>
          <div className="col-3 attendance-data">11:00AM</div>
          <div className="col-3 attendance-data">11:02AM</div>
        </div>
        <div className="row attendance-row">
          <div className="col-3 attendance-data">1 | THU</div>
          <div className="col-3 attendance-data class-cancel">
            NOT SCHEDULED
          </div>
          <div className="col-3 attendance-data">11:00AM</div>
          <div className="col-3 attendance-data">11:02AM</div>
        </div>
        <div className="row attendance-row">
          <div className="col-3 attendance-data">1 | THU</div>
          <div className="col-3 attendance-data class-cancel">
            CANCELLED REASON
          </div>
          <div className="col-3 attendance-data">11:00AM</div>
          <div className="col-3 attendance-data">11:02AM</div>
        </div>
      </div>
    </div>
  );
};
