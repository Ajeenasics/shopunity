import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./deliveryagent.css";
import img from "../../images/delivery.png";
import { useNavigate } from "react-router-dom";

function DeliveryAgentRegistration() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/deliveryagentlogin");
  };
  return (
    <div className="delivery_agent_register">
      <h5 className="text-center">Delivery Agent Register</h5>
      <Container>
        <Row className="delivery_agent_register_main">
          <Col>
            <img className="w-100 mb-5" src={img} alt="no img"></img>
            <FloatingLabel
              controlId="floatingInput"
              label="Delivery Areas"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Vehicle Type"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Delivery Areas"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>

          <Col className=" delivery_agent_register_form">
            <FloatingLabel
              controlId="floatingInput"
              label="Agent Name"
              className="mb-3"
            >
              <Form.Control type="test" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Email Id"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Contact"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Password" />
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
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="License number"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="name@example.com" />
            </FloatingLabel>

            <button onClick={handleRegister} className="btn btn-dark mt-5">
              {" "}
              Register
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DeliveryAgentRegistration;
