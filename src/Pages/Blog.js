import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

export default function Blog() {
  return (
    <Container>
      <Row>
        <Col md="9">
          <div className="d-flex align-items-center m-5">
            <img
              width={150}
              height={150}
              className="mr=3"
              src="https://media.tproger.ru/uploads/2020/12/react-roadmap-2021-cover-icon-original.png"
              alt="react"
            />
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ipsum fuga aliquid aliquam soluta, placeat officia
                consequuntur beatae magni dolorum eos debitis cum iste
                consequatur itaque officiis, dolore facilis quasi.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center m-5">
            <img
              width={150}
              height={150}
              className="mr=3"
              src="https://media.tproger.ru/uploads/2020/12/react-roadmap-2021-cover-icon-original.png"
              alt="react"
            />
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ipsum fuga aliquid aliquam soluta, placeat officia
                consequuntur beatae magni dolorum eos debitis cum iste
                consequatur itaque officiis, dolore facilis quasi.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center m-5">
            <img
              width={150}
              height={150}
              className="mr=3"
              src="https://media.tproger.ru/uploads/2020/12/react-roadmap-2021-cover-icon-original.png"
              alt="react"
            />
            <div class="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ipsum fuga aliquid aliquam soluta, placeat officia
                consequuntur beatae magni dolorum eos debitis cum iste
                consequatur itaque officiis, dolore facilis quasi.
              </p>
            </div>
          </div>
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Categories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Html/Css</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>C++</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className="mt-3" bg='light'>
            <Card.Body>
              <Card.Title>Side widget</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis excepturi ipsum earum! Provident amet explicabo
                aliquid quis voluptatem pariatur libero!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
