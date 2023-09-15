import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Admin.css';
import axios from 'axios';
import { createContext } from "react";
import { tokenContext } from './login';



function AddVehicle() {
  return (
    <div>
      <h2>Add Vehicle</h2>
      {/* Add your form for adding a vehicle here */}
    </div>
  );
}

function ViewVehicles() {
  let [Vechicle, setVehicles] = useState([{}]);
  let tokenCon = useContext(tokenContext);
  console.log(tokenCon);
  let bearer = "bearer " + tokenCon;
  let conFig = {
    headers: { Authorization: bearer }
  };
  var url = "https://localhost:7116/api/Vehicles/getallvehicles"

  //Geting Vehicle Data
  useEffect(()=>{axios
  .get(url,conFig)
  .then(function(response){
    //print the vechile details.
    //console.log(response.data)
    setVehicles(response.data);
    console.log(response.data);
    console.log(Vechicle);
    

  })
  .catch(error=>{
    console.log(error);
  });
},[]);


  return (
    <div>
      <h2>View Vehicles</h2>

      <div className="vehicle-list">
        <table>
          <thead>
            <tr>
              <th>Vehicle ID</th>
              <th>User ID</th>
              <th>Vehicle Type</th>
              <th>Fuel Type</th>
            </tr>
          </thead>
          <tbody>
            
          
       {Vechicle.map((vc)=>(
       <tr key={vc.vehicleid}>
        <td>{vc.vehicleid}</td>
        <td>{vc.userid}</td>
        <td>{vc.vehicletype}</td>
        <td>{vc.fueltype}</td>
      </tr>))}  

          </tbody>
        </table>
      </div>


    </div>
  );
}

function ViewTrips() {

  let [Trip, setTrip] = useState([{}]);
  let tokenCon = useContext(tokenContext);
  console.log(tokenCon);
  let bearer = "bearer " + tokenCon;
  let conFig = {
    headers: { Authorization: bearer }
  };
  var url = "https://localhost:7116/api/TripDetails";

    //Geting Trip Data
    useEffect(()=>{axios
      .get(url,conFig)
      .then(function(response){
        //print the vechile details.
        //console.log(response.data)
        setTrip(response.data);
        console.log(response.data);
        console.log(Trip);
        
    
      })
      .catch(error=>{
        console.log(error);
      });
    },[]);

  return (
    <div>
      <h2>View Trips</h2>
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
    </div>
  );
}

function ViewUsers() {

  let [User, setUser] = useState([{}]);
  let tokenCon = useContext(tokenContext);
  console.log(tokenCon);
  let bearer = "bearer " + tokenCon;
  let conFig = {
    headers: { Authorization: bearer }
  };
  var url = "https://localhost:7116/api/Users/showuser";

    //Geting User Data
    useEffect(()=>{axios
      .get(url,conFig)
      .then(function(response){
        //print the vechile details.
        //console.log(response.data)
        setUser(response.data);
        console.log(response.data);
        console.log(User);
        
    
      })
      .catch(error=>{
        console.log(error);
      });
    },[]);

  return (
    <div>
      <h2>View Users</h2>


      <div className="user-list">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Role</th>
              <th>User Contact</th>
            </tr>
          </thead>
          <tbody>
            
          
       {User.map((vc)=>(
       <tr key={vc.userid}>
        <td>{vc.userid}</td>
        <td>{vc.username}</td>
        <td>{vc.role}</td>
        <td>{vc.contact}</td>
      </tr>))}  

          </tbody>
        </table>
      </div>



    </div>
  );
}

function Admin() {
  const [activeComponent, setActiveComponent] = useState(null);

  const navigate = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        {/* <button onClick={() => navigate(<AddVehicle />)}>Add Vehicle</button> */}
        <button onClick={() => navigate(<ViewVehicles />)}>View Vehicles</button>
        <button onClick={() => navigate(<ViewTrips />)}>View Trips</button>
        <button onClick={() => navigate(<ViewUsers />)}>View Users</button>
      </div>

      {/* Display the active component */}
      {activeComponent}
    </div>
  );
}

export default Admin;