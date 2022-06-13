import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import Logo from "../images/Logo.webp"
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className="">
      <Navbar bg="light" expand="lg" fixed="top"  className="navbar">
        <Container fluid>
          <Navbar.Brand>
              <img src={Logo} alt="Star-wars-logo"  className="logo" onClick={() => {
                navigate("/")
              }} / >
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#" onClick={() => {
                navigate("/characters")
              }} className='cast-hov'>Characters</Nav.Link>            
            </Nav>
            <Form className="d-flex">
              <button className="search-button"
                onClick={() => {
                  navigate("/characters")
                }}
              >Search</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
