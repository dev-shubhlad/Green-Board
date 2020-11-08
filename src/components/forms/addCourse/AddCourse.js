import React from "react";

import "./addCourse.css";

export const AddCourse = () => {
  return (
    <div className="container">
      <div className="addcourse-container">
        <form id="contact">
          <fieldset>
            <input
              placeholder="ENTER COURSE/SUBJECT TITLE"
              type="text"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <input placeholder="COURSE BELONGS TO" type="text" required />
          </fieldset>
          <fieldset>
            <select name="category" id="category">
              <option value="">SELECT COURSE CATEGORY</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </fieldset>
          <fieldset>
            <textarea placeholder="COURSE DESCRIPTION " required></textarea>
          </fieldset>
          <fieldset>
            <input
              placeholder="COURSE START DATE"
              className="textbox-n"
              type="text"
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
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              id="date"
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
                />
                <label for="male">Public</label>
              </div>
              <div className="col-6">
                <input
                  type="radio"
                  id="private"
                  name="courseType"
                  value="PRIVATE"
                />
                <label for="female">Private</label>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <input
              placeholder="NO OF SEATS FOR DISTANCE LEARNER"
              type="number"
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
                  required
                />
              </fieldset>
            </div>
          </div>
          <fieldset>
            <input
              placeholder="DISCOUNTED PRICE: RS. 285/- per month"
              type="number"
              step="0.01"
              required
            />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="course-submit">
              CREATE COURSE
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
