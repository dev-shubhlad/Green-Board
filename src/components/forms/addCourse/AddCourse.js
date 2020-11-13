import React, { Component } from "react";
import Select from "react-select";
import "./addCourse.css";
import { WorkingDays } from "./WorkingDays";
import { api } from "../../../api/Axios";

export class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      availability: true,
      startsAt: "",
      endsAt: "",
      workingDays: [],
      category: [],
      price: "",
      distantNoOfSeats: "",
      courseType: "PUBLIC",
      discount: "",
    };

    this.options = [
      { value: "CLASSIX", label: "CLASSIX" },
      { value: "CLASSXI", label: "CLASSXI" },
      { value: "CLASSVI", label: "CLASSVI" },
      { value: "CLASSVII", label: "CLASSVII" },
      { value: "CLASSVIII", label: "CLASSVIII" },
      { value: "UPSC", label: "UPSC" },
      { value: "NEET", label: "NEET" },
      { value: "JEE", label: "JEE" },
      { value: "CLASSX", label: "CLASSX" },
      { value: "CLASSXII", label: "CLASSXII" },
      { value: "CLASSXII", label: "CLASSXII" },
      { value: "CAT", label: "CAT" },
      { value: "SSC", label: "SSC" },
    ];
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let courseObject;
    console.log("CourseType: ", this.courseType);
    if (this.courseType == "PRIVATE") {
      courseObject = {
        name: this.name,
        description: this.description,
        availability: this.availability,
        startsAt: this.startsAt,
        endsAt: this.endsAt,
        workingDays: this.workingDays,
        category: this.category,
        courseType: this.courseType,
      };
    } else {
      courseObject = this.state;
    }
    try {
      console.log("Course Create State: ", courseObject);
      const { data } = await api.post("/v1/course", courseObject);
      console.log("Course Create: ", data);
    } catch (error) {
      console.log("Course Create State: ", courseObject);
      console.log("Course Create: ", error);
    }
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({ category: e.value });
  };

  handleDays = (e) => {
    this.setState({ workingDays: e });
  };

  render() {
    return (
      <div className="container">
        <div className="addcourse-container">
          <form id="contact">
            <fieldset>
              <input
                placeholder="ENTER COURSE/SUBJECT TITLE"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <input placeholder="COURSE BELONGS TO" type="text" required />
            </fieldset>
            <fieldset>
              <Select
                className="select-opt-class"
                options={this.options}
                isMulti
                onChange={this.handleChange}
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="COURSE DESCRIPTION"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <input
                placeholder="COURSE START DATE"
                className="textbox-n"
                type="text"
                name="startsAt"
                value={this.state.startsAt}
                onChange={this.handleInputChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                id="date"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="COURSE END DATE"
                className="textbox-n"
                type="text"
                name="endsAt"
                value={this.state.endsAt}
                onChange={this.handleInputChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                id="date"
              />
            </fieldset>
            <fieldset>
              <label> SCHEDULE TIME</label>
              <WorkingDays
                workingDays={this.state.workingDays}
                onAdd={this.handleDays}
              />
            </fieldset>
            <fieldset>
              <label>COURSE TYPE</label>
              <div className="row">
                <div className="col-6">
                  <input
                    type="radio"
                    id="public"
                    name="courseType"
                    value="PUBLIC"
                    checked={this.state.courseType === "PUBLIC"}
                    onChange={this.handleInputChange}
                  />
                  <label for="male">Public</label>
                </div>
                <div className="col-6">
                  <input
                    type="radio"
                    id="private"
                    name="courseType"
                    value="PRIVATE"
                    checked={this.state.courseType === "PRIVATE"}
                    onChange={this.handleInputChange}
                  />
                  <label for="female">Private</label>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <input
                placeholder="NO OF SEATS FOR DISTANCE LEARNER"
                type="number"
                name="distantNoOfSeats"
                value={this.state.distantNoOfSeats}
                onChange={this.handleInputChange}
                disabled={this.state.courseType === "PRIVATE"}
                required
              />
            </fieldset>
            <div className="row">
              <div className="col-6">
                <fieldset>
                  <input
                    placeholder="PRICE / MONTH"
                    type="number"
                    step="0.01"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    disabled={this.state.courseType === "PRIVATE"}
                    required
                  />
                </fieldset>
              </div>
              <div className="col-6">
                <fieldset>
                  <input
                    placeholder="Discount IN %"
                    type="number"
                    step="0.01"
                    name="discount"
                    value={this.state.discount}
                    onChange={this.handleInputChange}
                    disabled={this.state.courseType === "PRIVATE"}
                    required
                  />
                </fieldset>
              </div>
            </div>
            <fieldset>
              <div className="intructor-page-title box-custom-shadow">
                DISCOUNTED PRICE: RS.
                {this.state.price -
                  this.state.price * (this.state.discount / 100)}
                /- per month
              </div>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="course-submit"
                onClick={this.handleSubmit}
              >
                CREATE COURSE
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
