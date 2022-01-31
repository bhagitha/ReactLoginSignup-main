import React from "react";

const Homepage = () => {
  return (
    <form action="" className="was-validated">
      <div className="form-group">
        {/* <label for="uname">Name:</label> */}
        <input
          type="text"
          className="form-control"
          id="uname"
          placeholder="Enter your Name"
          name="uname"
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="form-group">
        {/* <label for="email">email:</label> */}
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="form-group">
        {/* <label for="email">email:</label> */}
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Enter phone number"
          name="phone"
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="form-group">
        {/* <label for="email">email:</label> */}
        <input
          type="text"
          className="form-control"
          id="institute"
          placeholder="Enter institute name"
          name="institute"
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="form-group form-radio">
        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            name="gender"
            required
          />{" "}
          male
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">
            Check this radio button to continue.
          </div>
        </label>

        <label className="form-radio-label">
          <input
            className="form-radio-input"
            type="radio"
            name="gender"
            required
          />
          female
        </label>
      </div>
      {/* course completed*/}
      <div class="btn-group">
        <button type="button" class="btn btn-primary">
          Course Completed
        </button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        ></button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            Link 1
          </a>
          <a class="dropdown-item" href="#">
            Link 2
          </a>
        </div>
      </div>
      {/*stream  */}
      <div class="btn-group">
        <button type="button" class="btn btn-primary">
          Stream{" "}
        </button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        ></button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            Link 1
          </a>
          <a class="dropdown-item" href="#">
            Link 2
          </a>
        </div>
      </div>
      {/* internship opted */}
      <div class="btn-group">
        <button type="button" class="btn btn-primary">
          Internship opted{" "}
        </button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        ></button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            Link 1
          </a>
          <a class="dropdown-item" href="#">
            Link 2
          </a>
        </div>
      </div>
      {/* total fee */}
      <div className="form-group">
        {/* <label for="uname">Name:</label> */}
        <input
          type="text"
          className="form-control"
          id="uname"
          placeholder="Enter your Name"
          name="uname"
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      {/* Terms opted */}
      <div class="btn-group">
        <button type="button" class="btn btn-primary">
          terms{" "}
        </button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        ></button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">
            Link 1
          </a>
          <a class="dropdown-item" href="#">
            Link 2
          </a>
        </div>
      </div>
      {/* monthly fee */}
      <div className="form-group">
        {/* <label for="uname">Name:</label> */}
        <input
          type="text"
          className="form-control"
          id="uname"
          placeholder="Enter your Name"
          name="uname"
          required
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Homepage;
