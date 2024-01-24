import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import './shopowner.css'
import img from '../../images/store2.png'
function ShopOwnerLogin() {
  return (
    <div className='shop_login'>
    <Container>
    <Row className="shop_login_main">
      <Col>
        <img
          className="w-75 "
          src={img}
          alt="no img"
        ></img>
      </Col>

      <Col className=" shop_login_form bg-secondary">
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

export default ShopOwnerLogin
