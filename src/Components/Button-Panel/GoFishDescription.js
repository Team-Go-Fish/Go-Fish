import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function GoFishDescription(props) {
  return (
    <>
      <Modal
        // {...props}
        size="sm"
        aria-labelledby="selected movie poster"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.movie.poster} alt="movie poster"></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default GoFishDescription;