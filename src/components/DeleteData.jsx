import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NewContext } from "../App";
import { Link, useParams } from "react-router-dom";

function DeleteData() {
  const { data, setData } = useContext(NewContext);
  const { index } = useParams();
  const userId = parseInt(index);

  const handleDelete = () => {
    const newdata = [...data];
    newdata.splice(userId, 1);
    setData(newdata);

  };
  
  return (
    <div className="text-center m-5">
      <h1 className="m-2 text-primary">Are you sure to delete ?</h1>
      <Button className="text-bg-success mx-2 fw-bold text-light ">
        <Link className="text-light text-decoration-none" to="/">
          Cancel
        </Link>
      </Button>
      <Button onClick={handleDelete} className="text-bg-danger  fw-bold">
       <Link className="text-light text-decoration-none" to="/">
          Delete
        </Link>
      </Button>
    </div>
  );
}

export default DeleteData;
