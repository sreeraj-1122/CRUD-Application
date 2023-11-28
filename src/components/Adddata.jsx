import React, { useContext, useState } from "react";
import "../styles/crudStyle.css";
import { Row, Form, Button } from "react-bootstrap";
import { NewContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

function Adddata() {
  const { data, setData } = useContext(NewContext);
  const nav=useNavigate()
  let [input, setInput] = useState({
    id: 4,
    name: "",
    age: "",
    email: "",
    class: "",
    place: "",
    clgname: "",
    admno: "",
    dob: "",
  });
  let handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = (e) => {
    setData([...data, input]);
    nav('/')
  };
  return (
    <div>
      <div className="form">
        <h3>Add Details</h3>
        <form action="" onSubmit={(e) => e.preventDefault()} >
          <div className="input-data">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="input-data">
            <label htmlFor="">Age:</label>
            <input
              type="text"
              value={input.age}
              name="age"
              onChange={handleChange}
              required
              placeholder="Enter Your Age"

            />
          </div>
          <div className="input-data">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={handleChange}
              required
              placeholder="Enter your Email"

            />
          </div>
          <div className="input-data">
            <label htmlFor="">DOB:</label>
            <input
              type="text"
              value={input.dob}
              name="dob"
              onChange={handleChange}
              required
              placeholder="Enter Your DOB"

            />
          </div>
          <div className="input-data">
            <label htmlFor="">Place:</label>
            <input
              type="text"
              value={input.place}
              name="place"
              onChange={handleChange}
              required
              placeholder="Enter Your Place"

            />
          </div>
          <div className="input-data">
            <label htmlFor="">College name:</label>
            <input
              type="text"
              value={input.clgname}
              name="clgname"
              onChange={handleChange}
              required
              placeholder="Enter Your College name"

            />
          </div>
          <div className="input-data">
            <label htmlFor="">Admission No:</label>
            <input
              type="text"
              value={input.admno}
              name="admno"
              onChange={handleChange}
              required
              placeholder="Enter Your College Admission No"

            />
          </div>
          <div className="input-data">
            <label htmlFor="">Qualification:</label>
            <input
              type="text"
              value={input.class}
              name="class"
              onChange={handleChange}
              required
              placeholder="Enter Your Qualification"

            />
          </div>
          <div className="btn">
            <Button
              type="submit"
              className="fw-bold text-bg-success "
              onClick={handleSubmit}
            >
                Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adddata;
