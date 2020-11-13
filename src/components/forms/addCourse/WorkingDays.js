import React, { useEffect, useState } from "react";

export const WorkingDays = (props) => {
  const [daySelect, setDaySelect] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [workDays, setWorkDays] = useState([]);
  const { workingDays, onAdd } = props;

  //   useEffect(() => {
  //     setWorkDays(workingDays);
  //   }, [workingDays]);

  console.log("WorkingDays: ", workingDays);
  console.log("WorkDays: ", workDays);

  const handleClick = () => {
    const newDay = {
      day: daySelect,
      startTime: startTime,
      endTime: endTime,
    };
    let arr = workingDays;
    arr.push(newDay);
    onAdd(arr);
  };

  return (
    <>
      {workingDays.length > 0 &&
        workingDays.map((day) => {
          return (
            <div className="row">
              <div className="col-4">{day.day}</div>
              <div className="col-4">{day.startTime}</div>
              <div className="col-4">{day.endTime}</div>
            </div>
          );
        })}
      <div className="row" style={{ margin: "10px 0px" }}>
        <div className="col-4">
          <select
            value={daySelect}
            onChange={(e) => setDaySelect(e.target.value)}
          >
            <option value="Monday">MONDAY</option>
            <option value="Tuesday">TUESDAY</option>
            <option value="Wednesday">WEDNESDAY</option>
            <option value="Thrusday">THURSDAY</option>
            <option value="Friday">FRIDAY</option>
            <option value="Saturday">SATURDAY</option>
            <option value="Sunday">SUNDAY</option>
          </select>
        </div>
        <div className="col-4">
          <input
            placeholder="05:50"
            type="text"
            name="name"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="col-4">
          <input
            placeholder="05:50"
            type="text"
            name="name"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
      </div>
      <div
        className="btn btn-success"
        style={{ float: "right", margin: "10px 10px" }}
        onClick={handleClick}
      >
        ADD
      </div>
    </>
  );
};
