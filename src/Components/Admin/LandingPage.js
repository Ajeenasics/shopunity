import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "./landing.css";

function LandingPage() {
  const navigate = useNavigate();

  let Customer = () => {
    navigate("/customerlogin");
  };

  let DeliveryAgent = () => {
    navigate("/deliveryagentlogin");
  };
  let Shopowner = () => {
    navigate("/shopownerlogin");
  };
  let wholesaledealer = () => {
    navigate("/wholesaledealerlogin");
  };
  let Admin = () => {
    navigate("/Admin");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="navshadow">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <div className="col-9">
          <Navbar.Brand href="/" className="toggleimg"></Navbar.Brand>
        </div>
        <div className="col-2">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navlist">
              <button
                onClick={handleShow}
                className="landingloginbtn ps-3 pe-3"
              >
                {" "}
                Login{" "}
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="modal">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <button onClick={wholesaledealer} className="landingloginbtn">
            <i class="fa-solid fa-user"></i> WholeSale Dealer{" "}
          </button>
          <button onClick={Shopowner} className="landingloginbtn">
            <i class="fa-solid fa-user"></i> ShopOwner{" "}
          </button>
          <button onClick={Customer} className="landingloginbtn">
            <i class="fa-solid fa-user"></i>Customer{" "}
          </button>
          <button onClick={Admin} className="landingloginbtn">
            <i class="fa-solid fa-user"></i> Admin{" "}
          </button>
          <button onClick={DeliveryAgent} className="landingloginbtn">
            <i class="fa-solid fa-user"></i> Delivery Agent{" "}
          </button>
        </Modal>
      </div>
      <div className="shopunitytittle_main">
      <h5 className="shopunitytittle">Shop Unity</h5>
      </div>
    </div>
  );
}

export default LandingPage;
