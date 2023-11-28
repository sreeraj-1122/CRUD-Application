import React, { useContext, useState } from "react";
import "../styles/crudStyle.css";
import { Button, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NewContext } from "../App";
function CrudHome() {
    const {data,setData}=useContext(NewContext)
    
  return (
    <div>
      <h1 className="text-center fw-bold text-success">CRUD operations</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Age</th>
            <th className="p-3">Email Address</th>
            <th className="p-3">Qualification</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {data.map((value,index) => (
          <>
            <tbody>
              <tr>
                <td className="p-3">{value.name}</td>
                <td className="p-3">{value.age}</td>
                <td className="p-3">{value.email}</td>
                <td className="p-3">{value.class}</td>
                <td className="text-center p-3">
                  <Link to={`/viewdata/${value.id}`}>
                    <FaEye className="fs-5 text-light " />
                  </Link>
                </td>
                <td className="text-center p-3 text-light">
                  <Link to={`/editdata/${index}`}>
                    <FiEdit className="fs-5 text-light" />
                  </Link>
                </td>
                <td className="text-center p-3">
                  <Link to={`/deletedata/${index}`} >
                    <AiFillDelete className="fs-5 text-light "  />
                  </Link>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </Table>
      <div style={{ textAlign: "center" }}>
        <Link className="text-light text-decoration-none" to="/adddata">
          <Button
            variant="outline-danger"
            className="text-bg-primary fw-bold w-25"
            size="lg"
          >
            Create
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CrudHome;
