import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import "./App.css";



function Main() {
    return (
      <div className="App">
        {/* start header */}
        <header>
          <Navbar expand="lg" className="navbar">
            <Container>
              <Navbar.Brand className="title" href="#home">
                <h1> Crafteria </h1> <br />
                <h5> Craft Your Dreams</h5>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav links">
                <Nav className="me-auto block">
                  <Nav.Link href="/">
                  <p>Home</p>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <p>About</p>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <p>Special Deals</p>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <p>Contact</p>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        {/* end header */}
        {/* start landing */}
        <div className="landing">
          <div class="landing-text">
            <h1>Top Rating</h1>
            <h2>Explore Best Crafts</h2>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Ahmed Nour (Furniture)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Kaled Amr (Pottery)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Omar Ahmed (Copper)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Ahmed Nour (Furniture)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Kaled Amr (Pottery)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Omar Ahmed (Copper)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end landing */}
      </div>
    );
  }
  
  export default Main;
  