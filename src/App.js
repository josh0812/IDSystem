import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Alert from 'react-bootstrap/Alert'
import {
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Badge
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
          
            <Navbar bg="light">
              <Navbar.Brand href="#home">
                <Image src="images/ciit.png" width={80} height={30}></Image>
              </Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col md={4}>
              <h4>
                Entrance <Badge variant="secondary">1</Badge>
              </h4>
            </Col>
            <Col md={4}>
              <h4>
              Entrance <Badge variant="secondary">2</Badge>
              </h4>
            </Col>
            <Col md={4}>
              <h4>
              Entrance <Badge variant="secondary">3</Badge>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="images/schoolOfTech.jpg"
                  width={171}
                  height={180}
                />
                <Card.Body>
                  <Card.Title>17-123456789</Card.Title>
                  <Card.Text>DELA CRUZ, JUAN</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{"BSCS"}</ListGroupItem>
                  <Alert variant="success"> <ListGroupItem>{"CLEARED"}</ListGroupItem></Alert>
                  <Alert variant="success"><ListGroupItem>{"You May Pass"}</ListGroupItem></Alert>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">0800</Card.Link>
                  <Card.Link href="#">1500</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="images/dp.jpg"
                  width={171}
                  height={180}
                />
                <Card.Body>
                  <Card.Title>17-182253566</Card.Title>
                  <Card.Text>Benoya, Gary</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{"BSCS"}</ListGroupItem>
                  <Alert variant="danger"><ListGroupItem>{"Proceed to Registrar Office"}</ListGroupItem></Alert>
                  <Alert variant="danger"><ListGroupItem>{"GIVE TEMPORARY PASS"}</ListGroupItem></Alert>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">0900</Card.Link>
                  <Card.Link href="#">1800</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="images/jr.jpg"
                  width={171}
                  height={180}
                />
                <Card.Body>
                  <Card.Title>17-12345678</Card.Title>
                  <Card.Text>MArtin , Romello</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{"BSEMC"}</ListGroupItem>
                  <Alert variant="success"> <ListGroupItem>{"CLEARED"}</ListGroupItem></Alert>
                  <Alert variant="success"><ListGroupItem>{"GIVE TEMPORARY PASS"}</ListGroupItem></Alert>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">1000</Card.Link>
                  <Card.Link href="#">2100</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          
        </Container>
        
      </div>
    );
  }
}

export default App;
