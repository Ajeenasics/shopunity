import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import './shopowner.css'

function ShopOwnerRegistration() {
  return (
    <div className="shop_register">
      <Container>
        <Row className="shop_register_main">
          <Col>
            <img
              className="w-75"
              src="https://media.istockphoto.com/vectors/young-bari-sta-woman-and-coffee-bar-flat-vector-illustration-vector-id510310760?k=6&m=510310760&s=612x612&w=0&h=9F1U9vbIl-khfZ6RBrQfpGlXWs12nShkZW8S2V5DotQ=
          "
              alt="no img"
            ></img>
          </Col>

          <Col className="shop_register_form">
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

export default ShopOwnerRegistration;
