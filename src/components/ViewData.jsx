import React, { useContext } from 'react'
import { NewContext } from '../App'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function ViewData() {
    const {data,setData}=useContext(NewContext)
    const {userid}=useParams()
    const userIdx=parseInt(userid)
    const currentData=data.find(item=>item.id===userIdx)

  return (
    <div className='m-4'>
        {   <Card style={{ width: '25rem', border:'2px solid red', margin:'2px' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className='text-bg-success'>
      <Card.Text className=''>Roll No: {currentData.id}</Card.Text>
        <Card.Title>Name: {currentData.name}</Card.Title>
        <Card.Title>Age: {currentData.age}</Card.Title>
        <Card.Title>Place:  {currentData.place}</Card.Title>
        <Card.Title>DOB: {currentData.dob}</Card.Title>

        <Card.Title>Admission No: {currentData.admno}</Card.Title>
        <Card.Title>College Name: {currentData.clgname}</Card.Title>
        <Card.Title>Course: {currentData.class}</Card.Title>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>}
    </div>
  )
}

export default ViewData