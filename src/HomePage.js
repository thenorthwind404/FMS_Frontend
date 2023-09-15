import React from 'react';
import './HomePage.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function HomePage() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                {/* <Container> */}
                    <Navbar.Brand href="#home">FMS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>

                    </Nav>
                {/* </Container> */}
            </Navbar>

            <MDBCarousel showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://www.shell.cz/motorists/shell-fuels/composition-of-shell-fuels/_jcr_content/par/text_over_image_copy/image.img.960.jpeg/1659639219009/shell-dynaflex.jpeg?imwidth=1280'
                    alt='...'
                    style={{height:'95vh'}}
                    interval='3500'
                >
                    <h4 style={{color:'black'}}>Fuel Management System</h4>
                    <h5 style={{color:'black'}}>The GPS for Your Fleet's Efficiency!</h5>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://www.shell.in/motorists/inside-our-stations/introducing-vehicle-sanitization-service-at-shell/_jcr_content/pagePromo/image.img.960.jpeg/1599650270982/retail-station-cape-town-south-africa.jpeg?imwidth=384'
                    alt='...'
                    style={{height:'95vh'}}
                    interval='3500'
                >
                    
                    <h5 className='.pe-0' style={{backgroundColor:'rgba(0, 0, 0, 0.5)',width:'68%', marginLeft: '20%'}}>Fuel Management System: Where Every Drop Counts for Savings!</h5>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://www.shell.fr/a-propos-de-nous/nos-activites/_jcr_content/pagePromo/image.img.960.jpeg/1485260138930/engineer-in-red-uniform-with-yellow-hard-hat-by-marsb-platform-construction.jpeg'
                    alt='...'
                    style={{height:'95vh'}}
                    interval='3500'
                >
                    
                    <h5>Optimizing Fleet Performance: Fuel Management Systems as Your Guiding Light!</h5>
                </MDBCarouselItem>
            </MDBCarousel>

            
            <main>
                <section className="fuel-overview">
                    <h2>Fuel Overview</h2>
                    {/* Display fuel-related information here */}
                </section>
                <section className="recent-trips">
                    <h2>Recent Trips</h2>
                    {/* Display recent trip details here */}
                </section>
                <section className="fuel-report">
                    <h2>Fuel Report</h2>
                    {/* Display fuel report or charts here */}
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Fuel Management System</p>
            </footer>
        </div>
    );
}

export default HomePage;