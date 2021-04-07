import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AgeButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} >
        Select Age
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is your age?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select your age group:
          <div>
            <Button onClick={handleClose}>Little Fish: 8-17</Button>
          </div>
          <div>
            <Button onClick={handleClose}>Big Fish: 17+</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AgeButton;