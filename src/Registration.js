import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
} from 'mdb-react-ui-kit';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registrationError, setRegistrationError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'password') {
      checkPasswordStrength(value);
    }
    if (name === 'confirmPassword') {
      checkPasswordMatch(value);
    }
  };

  const checkPasswordStrength = (password) => {
    // Implement password strength checking logic here
    // Example: You can check for length, uppercase, lowercase, special characters, etc.
    let strength = '';

    if (password.length < 8) {
      strength = 'Weak';
    } else if (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      strength = 'Strong';
    } else {
      strength = 'Moderate';
    }

    setPasswordStrength(strength);
  };
  const checkPasswordMatch = (confirmPassword) => {
    setPasswordMatch(confirmPassword === formData.password);
  };

  const handleRegistration = () => {
    const { username, password, confirmPassword } = formData;

    // Basic validation
    if (!username || !password || !confirmPassword) {
      setRegistrationError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match.');
      return;
    }

    // Simulate registration (replace with actual registration API call)
    // Make a request for a user with a given ID
    axios.post('https://localhost:7116/api/Users/SignUp', formData)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // For simplicity, we simulate success after a short delay
    setTimeout(() => {
      setRegistrationError(null);
      setRegistrationSuccess(true);
      setFormData({
        username: '', // Clear input fields on success
        password: '',
        confirmPassword: '',
      });
      setPasswordStrength('');
    }, 1000);
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://w0.peakpx.com/wallpaper/616/876/HD-wallpaper-white-and-red-gas-pump.jpg"
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
              <div className="registration-container flex-row mt-2">
                <div className="registration-form" style={{ letterSpacing: '1px' }}>
                  <h2>Register for FMS</h2>
                  {registrationSuccess ? (
                    <div className="success-message">
                      Registration successful!{' '}
                      <Link to="/login">Click here to login.</Link>
                    </div>
                  ) : (
                    <div>
                      {registrationError && <div className="error-message">{registrationError}</div>}
                      <MDBInput
                        wrapperClass="mb-4"
                        id="formControlLg"
                        name="username"
                        type="text"
                        size="lg"
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) => handleInputChange(e)}
                       />

                      <MDBInput
                        wrapperClass="mb-4"
                        id="formControlLg"
                        name="password"
                        type="password"
                        size="lg"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => handleInputChange(e)}
                      />
                      {passwordStrength && formData.password !== '' && (
                        <div className={`password-strength ${passwordStrength === 'Strong' ? 'hidden' : ''}`}>
                          Password Strength: {passwordStrength}
                        </div>
                      )}
                      <MDBInput
                        wrapperClass="mb-4"
                        id="formControlLg"
                        name="confirmPassword"
                        type="password"
                        size="lg"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange(e)}
                        className={!passwordMatch ? 'is-invalid' : ''}
                      />
                      {!passwordMatch && (
                        <div className="error-message">Passwords do not match.</div>
                      )}
                      <MDBBtn
                        className="mb-4 px-5"
                        color="dark"
                        size="lg"
                        onClick={handleRegistration}
                        disabled={!passwordMatch}
                      >
                        Register
                      </MDBBtn>
                    </div>
                  )}
                </div>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Registration;