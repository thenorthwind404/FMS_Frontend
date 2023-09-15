import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import your CSS file for styling
import { createContext } from 'react';
import HomePage from './HomePage';
import Driver from './Driver';
import Admin from './Admin';

import {

  MDBBtn,

  MDBContainer,

  MDBCard,

  MDBCardBody,

  MDBCardImage,

  MDBRow,

  MDBCol,

  MDBIcon,

  MDBInput

}

  from 'mdb-react-ui-kit';


export let tokenContext = createContext();


function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  let [token, setToken] = useState("");
  let [role, setRole] = useState("");
  let [uid, setUid] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password } = formData;

    // You can implement your login logic here, e.g., send a request to an API
    axios.post('https://localhost:7116/api/Users/SignIn', formData)
      .then(function (response) {
        // handle success
        //console.log(response);
        setToken(response.data["token"]);
        setRole(response.data["role"]);
        setUid(response.data["userid"]);
        console.log(response.data);
        console.log(response.data["token"]);
        console.log(response.data["role"]);

        //context = token;
        //console.log(token);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // For simplicity, let's just display the login data for now
    // alert(`Logged in with Username: ${username} and Password: ${password}`);
  };

  if (token != "" && role == "Admin") {

    return (<>
      <tokenContext.Provider value={token} >

        <Admin>

        </Admin>

      </tokenContext.Provider>
    </>
    )

  }
  else if (token != "" && role == "Driver") {
    return (
      <>
        <tokenContext.Provider value={token} >
          <Driver></Driver>

        </tokenContext.Provider >
      </>

    )
  }
  else {
    return (
      <MDBContainer className="my-5">



        <MDBCard>

          <MDBRow className='g-0'>



            <MDBCol md='6'>

              <MDBCardImage src='https://w0.peakpx.com/wallpaper/616/876/HD-wallpaper-white-and-red-gas-pump.jpg' alt="login form" className='rounded-start w-100' />

            </MDBCol>



            <MDBCol md='6'>

              <MDBCardBody className='d-flex flex-column'></MDBCardBody>

              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />





              <div className="login-container">

                <div className="login-form">

                  <h2>Login to FMS</h2>

                  {/* <div className="error-message">{errorMessage}</div> */}

                  <MDBInput wrapperClass='mb-4' placeholder='Username' id='formControlLg' name='username' type='text' size="lg"

                    value={formData.username}

                    onChange={(e) => handleInputChange(e)} />



                  <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' name='password' type='password' size="lg"

                    value={formData.password}

                    onChange={(e) => handleInputChange(e)} />



                  <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>Login</MDBBtn>



                </div>

              </div>

            </MDBCol>



          </MDBRow>

        </MDBCard>



      </MDBContainer>


    );
  }
}

export default Login;
