import React from "react";
import "./wholesale.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function WholesaleDealerRegistration() {
  return (
    <div className="Wholesale_dealer_register p-5">
      <Container>
        <Row className="wholesale_dealer_register_main">
          <Col>
            <img
              className="w-75"
              src="https://static.vecteezy.com/system/resources/previews/022/650/933/non_2x/mix-icon-for-wholesale-vector.jpg"
              alt="no img"
            ></img>
          </Col>

          <Col className=" wholesale_dealer_register_form">
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
  );
}

export default WholesaleDealerRegistration;
