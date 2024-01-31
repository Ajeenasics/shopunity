import React from "react";
import "./wholesale.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function WholesaleDealerRegistration() {
  const navigate=useNavigate()
  const registerHandled=()=>{
    navigate('/wholesaledealerlogin')
  }
  return (
    <div className="Wholesale_dealer_register p-5">
    <h5 className='text-center'>Wholesale dealer register</h5>
      <Container>
        <Row className="wholesale_dealer_register_main">
          <Col>
            <img
              className="w-100 mt-5"
              src="https://static.vecteezy.com/system/resources/previews/022/650/933/non_2x/mix-icon-for-wholesale-vector.jpg"
              alt="no img"
            ></img>
          </Col>

          <Col className=" wholesale_dealer_register_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Company Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="mm"  />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="whole sale lisense number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="cs" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="sdc"/>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Conform Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <button onClick={registerHandled} className="btn btn-dark mt-5"> Register</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WholesaleDealerRegistration;
