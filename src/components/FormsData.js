import React from "react";
import "../styles/FormsData.css";
function FormsData() {
  return (
    <form>
      <div classNameName=" mb-3">
        <label className="form-label">Age</label>
        <input
          className="form-control"
          type="text"
          placeholder="Type your age"
        />
      </div>
      <div className=" mb-3">
        <label className="form-label">weight</label>
        <input
          className="form-control"
          type="number"
          placeholder="Enter your weight in kilograms"
        />
      </div>
      <div className=" mb-3">
        <label className="form-label">heigth</label>
        <input
          className="form-control"
          type="number"
          placeholder="Enter your heigth"
        />
      </div>
      <div className="mb-3">
        <div className="d-flex flex-column">
          <label className="form-label">physical activity</label>
          <select className="form-select mb-3">
            <option selected>Select your physical activity </option>
            <option value="1">Little or no exercise</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
      <label className="form-label">Sex</label>
        <div class="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </div>
      <hr></hr>
      <button type="button" className="btn btn-primary btn-lg w-100">
        Primary
      </button>
    </form>
  );
}

export default FormsData;
