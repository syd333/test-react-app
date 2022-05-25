import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import CountryCard from "./CountryCard";
import ReviewForm from "./ReviewForm";
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [filterBySearch, setFilterBySearch] = useState("")

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <>
        <Navbar expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#home">Trip Advisor</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-link">
                <Nav.Link className="nav-link" href="#">
                  ALL INCLUSIVE
                </Nav.Link>
                <Nav.Link className="nav-link" href="#link">
                  DESTINATIONS
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="App">
          <Container>
            <div className="header">Plan your next trip with us!</div>
            <Row>
              {items.slice(0, 6).map((item) => (
                <Col key={item.callingCodes} style={{ paddingBottom: "10px" }}>
                  <CountryCard item={item} />
                </Col>
              ))}
            </Row>
            <ReviewForm />
          </Container>
        </div>

      </>
    );
  }
}

export default App;
