import React, { useContext, useEffect, useState } from "react";
import "../styles/crudStyle.css";
import { Row, Form, Button } from "react-bootstrap";
import { NewContext } from "../App";
import { Link, useParams } from "react-router-dom";
function EditData() {
  const { data, setData } = useContext(NewContext);
  const { index } = useParams();
  const indexNo = parseInt(index);
  const dataId = data[indexNo].id;

  const curreData = data.find((item) => item.id === dataId);

  let [edit, setEdit] = useState({
    id: dataId,
    name: curreData.name,
    age: curreData.age,
    email: curreData.email,
    class: curreData.class,
    place: curreData.place,
    clgname: curreData.clgname,
    admno: curreData.admno,
    dob: curreData.dob,
  });

  let handleEdit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEdit({ ...edit, [name]: value });
  };
  const handleSubmitEdit = (e) => {
    const updateData = [...data];
    updateData[indexNo] = { ...updateData[indexNo], ...edit };
    setData(updateData);
  };
  return (
    <div>
      {
        <div className="form">
          <h3>Edit Details</h3>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="input-data">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                value={edit.name}
                required
                onChange={handleEdit}
                
              />
            </div>
            <div className="input-data">
              <label htmlFor="">Age:</label>
              <input
                type="text"
                name="age"
                value={edit.age}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="input-data">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                name="email"
                value={edit.email}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="input-data">
              <label htmlFor="">DOB:</label>
              <input
                type="text"
                name="dob"
                value={edit.dob}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="input-data">
              <label htmlFor="">Place:</label>
              <input
                type="text"
                name="place"
                value={edit.place}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="input-data">
              <label htmlFor="">College name:</label>
              <input
                type="text"
                name="clgname"
                value={edit.clgname}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="input-data">
              <label htmlFor="">Admission No:</label>
              <input
                type="text"
                name="admno"
                value={edit.admno}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="input-data">
              <label htmlFor="">Qualification:</label>
              <input
                type="text"
                name="class"
                value={edit.class}
                required
                onChange={handleEdit}
              />
            </div>
            <div className="btn">
              <Button
                className="fw-bold text-bg-success"
                onClick={handleSubmitEdit}
              >
                <Link className="text-light text-decoration-none" to="/">
                 
                  Edit
                </Link>
              </Button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default EditData;
