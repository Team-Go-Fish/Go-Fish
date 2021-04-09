import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const AgeButton = ({ user, setUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setAdult = () => {
    handleClose();
    const userWithAge = user;
    userWithAge.adult = true;
    setUser(userWithAge);
    axios.put(`https://3.136.112.63/users/age/${user.email}`, {
      adult: true
    });
  }

  const setChild = () => {
    handleClose();
    const userWithAge = user;
    userWithAge.adult = false;
    setUser(userWithAge);
    axios.put(`https://3.136.112.63/users/age/${user.email}`, {
      adult: false
    });
  }

  const renderAgeGroup = () => {
    if (user.adult === undefined) {
      return (
        <Button variant="outline-info" onClick={handleShow} >
          Select Age
        </Button>
      )
    } else if (user.adult === true) {
      return (
        <Button variant="outline-info" onClick={handleShow} >
          <img src="./sharks.png" width="25px" />
        </Button>
      )
    } else {
      return (
        <Button variant="outline-info" onClick={handleShow} >
          <img src="./no_sharks.png" width="25px" />
        </Button>
      )
    }
  }

  return (
    <>
      {renderAgeGroup()}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is your age?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select your age group:
          <div>
            <br></br>
            <Button variant="outline-info" onClick={setChild}>
              <img src="./no_sharks.png" width="50px" />
              8-17
            </Button>
          </div>
          <br></br>
          <div>
            <Button variant="outline-info" onClick={setAdult}>
              <img src="./sharks.png" width="50px" />  17+
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AgeButton;