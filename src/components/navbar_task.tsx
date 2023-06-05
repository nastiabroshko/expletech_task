import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "../assets/icons/expletech_logo.png";
import Post from "./post";
import AddPost from "../components/modal_add_post";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

export default function navbar_task() {
  return (
    <div className="navbar_main">
      <Navbar data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src={logo} width="120" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle className="bg-dark" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Carosel</Nav.Link>
              <AddPost></AddPost>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
