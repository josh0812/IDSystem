import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";


class Home extends Component {
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
        
      </div>
    );
  }
}

export default Home;
