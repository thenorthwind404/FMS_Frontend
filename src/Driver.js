import React, { useContext, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createContext } from "react";
import './Driver.css';
import axios from 'axios';
import {tokenContext} from './login';

function Driver() {
  let tokenCon = useContext(tokenContext)
  let element= {};
  //let bearer = "bearer "+tokenCon;
  //let conFig = {
  //  headers : { Authorization : bearer }
 //}
  var url = "https://localhost:7116/api/Vehicles/"
  url=url+String(tokenCon);
  //console.log(url);

  let [Vehicle, setVehicle] = useState({});
  let [Trip, setTrip] = useState([{}]);
 
  
  useEffect(()=>{axios
  .get(url)
  .then(function(response){
    //print the vechile details.
    //console.log(response.data)
    setVehicle(response.data);
    

  })
  .catch(error=>{
    console.log(error);
  });
  },[])
  

  //trip form starts here
  var url2 = "https://localhost:7116/api/TripDetails/"
  url2=url2+String(tokenCon);
  console.log(url2);
  useEffect(()=>{axios
    .get(url2)
    .then(function(response){
      //print the trip details.
      console.log(response.data)
      setTrip(response.data);
      console.log(Trip);
      
  
    })
    .catch(error=>{
      console.log(error);
    });
    },[])

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userid: '',
    vehicleid: '',
    tripdatetime: '',
    odometerstart: '',
    odometerend: '',
    fuelstart: '',
    fuelend: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, e.g., send the data to a server.
    console.log(formData);
    // Reset the form
    setFormData({
      userid: '',
      vehicleid: '',
      tripdatetime: '',
      odometerstart: '',
      odometerend: '',
      fuelstart: '',
      fuelend: '',
    });

    axios.post('https://localhost:7116/api/TripDetails/addTripDetail', formData)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

  };

  //trip form ends here



  return (
    <div>
      <h2 className='driver-text'>Driver's Dashboard</h2>
      <div className="trip-list">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Vehicle ID</th>
              <th>Vehicle Type</th>
              <th>Fuel Type</th>
              <th>Fuel Efficiency</th>
            </tr>
          </thead>
          <tbody>
          
      {<tr key={Vehicle.userid}>
        <td>{Vehicle.userid}</td>
        <td>{Vehicle.vehicleid}</td>
        <td>{Vehicle.vehicletype}</td>
        <td>{Vehicle.fueltype}</td>
        <td>{Vehicle.fuelefficiency}</td>
      </tr>}
          </tbody>
        </table>
      </div>


    {/* Printing Trip Details on Screen */}

    <div className="trip-list">
        <table>
          <thead>
            <tr>
              <th>Trip ID</th>
              <th>User ID</th>
              <th>Vehicle ID</th>
              <th>Trip Date</th>
              <th>Odometer Start</th>
              <th>Odometer End</th>
              <th>Fuel Start</th>
              <th>Fuel End</th>
              <th>Trip Mileage</th>
            </tr>
          </thead>
          <tbody>
            
          
       {Trip.map((trip)=>(
       <tr key={trip.tripid}>
        <td>{trip.tripid}</td>
        <td>{trip.userid}</td>
        <td>{trip.vehicleid}</td>
        <td>{trip.tripdatetime}</td>
        <td>{trip.odometerstart}</td>
        <td>{trip.odometerend}</td>
        <td>{trip.fuelstart}</td>
        <td>{trip.fuelend}</td>
        <td>{trip.tripmileage}</td>
      </tr>))}  

          </tbody>
        </table>
      </div> 


      <br />
      <div>
      <Button
       
        onClick={() => setShowForm(!showForm)}
        className="btn-driver"
      >
        Add Trip
      </Button>
      {showForm && (
        <Form onSubmit={handleSubmit} className="trip-form">
           <Form.Group controlId="userid">
            <Form.Label>User ID:</Form.Label>
            <Form.Control
              type="text"
              name="userid"
              value={formData.userid}
              onChange={handleInputChange}
            />
            </Form.Group>
          <Form.Group controlId="vehicleid">
            <Form.Label>Vehicle ID:</Form.Label>
            <Form.Control
              type="text"
              name="vehicleid"
              value={formData.vehicleid}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="tripdatetime">
            <Form.Label>Trip Date :</Form.Label>
            <Form.Control
              type="date"
              name="tripdatetime"
              value={formData.tripdatetime}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="odometerstart">
            <Form.Label>Odometer Start:</Form.Label>
            <Form.Control
              type="number"
              name="odometerstart"
              value={formData.odometerstart}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="odometerend">
            <Form.Label>Odometer End:</Form.Label>
            <Form.Control
              type="number"
              name="odometerend"
              value={formData.odometerend}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="fuelstart">
            <Form.Label>Fuel Start:</Form.Label>
            <Form.Control
              type="number"
              name="fuelstart"
              value={formData.fuelstart}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="fuelend">
            <Form.Label>Fuel End:</Form.Label>
            <Form.Control
              type="number"
              name="fuelend"
              value={formData.fuelend}
              onChange={handleInputChange}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
    </div>
  );

}
export default Driver;