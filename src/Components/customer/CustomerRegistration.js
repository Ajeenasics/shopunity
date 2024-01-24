import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CustomerRegistration() {
  return (
    <div>
    <Container>
    <Row className="wholesale_dealer_register_main">
      <Col>
        <img
          className="w-75 bg-dark"
          src="https://i.pinimg.com/originals/dd/f7/62/ddf7620b1a1af96d24f1413bb336f096.gif"
          alt="no img"
        ></img>
      </Col>

      <Col className=" wholesale_dealer_register_form bg-light">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Col>
    </Row>
  </Container>
    </div>
  )
}

export default CustomerRegistration
