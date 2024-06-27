import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



import "./App.css";

function User() {
  return (
    <>
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
      {/* start user1 */}
      <div className="user-port">
        <div className="portfolio">
          <div className="user-name">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
            </div>
            <div className="name-text">
              <h1>Ahmed nour</h1>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="icon-user"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                Cairo - New Giza
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon-user"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                01234567890
              </p>
            </div>
          </div>
          <div className="experience">
            <h1>experience</h1>
            <p>10 Years of Experience in Pottery industry in Aswan</p>
          </div>
        </div>
        <div className="gallery">
          <div className="gallert-text">
            <h1>gallery</h1>
          </div>
          <div className="gallery-photos">
            <a href="https://s3-alpha-sig.figma.com/img/790a/630a/33376072e40219d1b657e1e471e2416f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cqKHz9N4UO1wal7NEHVHNo5bfhq6GsVMVEpn5DlGt-563w6kvyfPdBX~Y2FTnC7J3B4tK1JSh8QopKsH8rTWLAmDxSljTcSS9VTAN36yo5WsdSJEFzAd~XeL2K-~8OqTHW9tr7FUJ0lFJdLECtcAWMElZLNhHZU0fz3kdKh-eJ53V1UUhwO6Gscp7LxQhJfjsbyPo8Tz1aKnZdc95I8egIwShEfBl5ZT9WtM4Ac39GRkGnzj9CNMU5Lc-C1WDA-dgD6uvutnOqipC66fURypljuUHJYDR0E~hMcv98w3Rjf5DcrLUVtbUBdZQQpU28wzx1vjF7sqyDQAwOOk7uu4Pw__"><div className="img-cont1"></div></a>
            <a href="https://s3-alpha-sig.figma.com/img/c519/8ace/f40fd943c6d79c2b77c8d0303af70db3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=apQgswA9NFe~pXIblb1ypC7u3FyjPJt6ryPogx1b9rdeMyhtRn~iSfIC1nqZQxZJQoZOf~lLuoOC9~VCoUvuEoxqOlrd9BSVhlC284nPab0X0E47yA8i74zf65w0KJSGLsq9Ax9qxlQ8j8mjHhrus7h~FaX4tyTSiwnV4sinIPDoXQjKf2KkwCVkTUB4wcWVUBOmDDm3VyXEyLFsiL2Mp0QUtdbaF70weDYDvau2niBQJgPlZ8SenNYdE5zJtknsqpGCoCQtBy2nOz6K6WNGtEEbn~joNMwHdIQx0RU3xrPGv3CI~dTk9J7QUw~Jj3kcUzsGrVjgiMDcWIaJWnjtFw__"><div className="img-cont2"></div></a>
            <a href="https://s3-alpha-sig.figma.com/img/efc5/be05/a588c7e62c3e372c421ab1bc67f8017e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNICFnB0PQbK9fCxBmIi4w031CvxIgX-dPu-AuGx28m1TPNCAdcTWnXm7AbQR2pgL6ru4ydjiSHSokUl1axefS6FJ-cL1muq0tHDWHXMlkIbvWvdxVo87Gad6olJay~MYg62-OU6H3ZKC-Q8zdGEy471uFwTrvnXeso1msipxM05fIwIUo2eWQvzBZZKoMwWip5gdq36K93mf6gyQqTV3uTwPwVgMlL9JQ-n-2CwRQrydE8Abb68uojweSqrRHIkzGFOTSq8ZKEoGGRdyzPO6y5AQA-W77~tlfmtoiqXPYZIshnaJ-5cOLUIU4uy3l7xJun3cRLMgqNv3J6dqY~~cw__"><div className="img-cont3"></div></a>
          </div>
        </div>
      </div>
      {/* end user1 */}
    </>
  );
}

export default User;
