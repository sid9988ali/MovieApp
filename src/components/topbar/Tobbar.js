import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Topbar.css";

function Topbar() {

  function refreshPage(){ 
    window.location.reload(); 
}


  return (
    <>
    <div className="container-fluid">
      <div id="navbar-div-id">
        <Navbar id="navbar"  collapseOnSelect expand="lg"  bg="dark" variant="dark">
          <Container>
         
<Nav>  
<Link to="./Home">
              <img id="logo-id" src={"./images/netflix-logo-rmbg.png"} />
            </Link>
  
  </Nav>    


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              <Nav id="navbar-links-div-id">
               
                <Link onClick={ refreshPage } to="/" id="comic-movies-link-id">
                  Home
                </Link>
                
                
                <Link to="/popularmovies" id="comic-movies-link-id">
                  Popular Movies
                </Link>

                <Link to="/LatestMovies" id="comic-movies-link-id">
                  Latest Movies
                </Link>
                <Link to="/comedymovies" id="comic-movies-link-id">
                  Comic Movies
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      </div>
    </>
  );
}
export default Topbar;
