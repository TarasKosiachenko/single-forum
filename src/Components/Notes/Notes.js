import React from "react";
import "./index.css";
import { Container, Tab, Nav, Row, Col, Button } from "react-bootstrap";

export default function Notes() {
  return (
    <Container>
      <Tab.Container id="left-tabs" defaultActiveKey="myNotes">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-3">
              <Nav.Item>
                <Nav.Link eventKey="myNotes">My Notes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="createNote">Create New Note</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col sm={9}>
            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="myNotes">
                <p>My Notes</p>
                <p>My Notes</p>
                <p>My Notes</p>
              </Tab.Pane>
              <Tab.Pane eventKey="createNote">
                <div className="createTitleNote">
                  <p>Title</p>
                  <input type="text" />
                </div>
                <div className="createTitleNote">
                  <p>Text</p>
                  <textarea name="Text1" cols="40" rows="5"></textarea>
                </div>
                <Button
                  variant="info"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Submit
                </Button>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
