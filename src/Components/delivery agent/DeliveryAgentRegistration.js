import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function DeliveryAgentRegistration() {
  return (
    <div>
    <Container>
    <Row className="delivery_agent_register_main">
      <Col>
        <img
          className="w-75 bg-dark"
          src="https://cdn.dribbble.com/users/1024957/screenshots/6800596/01.gif"
          alt="no img"
        ></img>
      </Col>

      <Col className=" delivery_agent_register_form bg-light">
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

export default DeliveryAgentRegistration
