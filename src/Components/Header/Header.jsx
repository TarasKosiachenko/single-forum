import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "./forumlogo.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Slider from '../../Pages/Slider';
import Notes from '../../Pages/Notes';
import ToDo from '../../Pages/ToDo';
import Blog from '../../Pages/Blog';
import Forum from '../../Pages/Forum';

export default function Header(props) {
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              height="30"
              width="90"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onMouseDown={(e) => e.preventDefault()}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Slider</Nav.Link>
              <Nav.Link href="/notes">Notes</Nav.Link>
              <Nav.Link href="/todo">ToDo</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/forum">Forum</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="text" placeholder="Search" className="me-2" />
              <Button
                variant="outline-info"
                onMouseDown={(e) => e.preventDefault()}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
         <Routes>
            <Route exact path='/' element={<Slider/>} />
            <Route exact path='/notes' element={<Notes/>} />
            <Route exact path='/todo' element={<ToDo/>} />
            <Route exact path='/blog' element={<Blog/>} />
            <Route exact path='/forum' element={<Forum/>} />
         </Routes>
      </Router>
    </>
  );
}

