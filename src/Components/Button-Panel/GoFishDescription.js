import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function GoFishDescription(props) {
  return (
    <>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="selected movie poster"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {console.log(props.movie)}
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.movie.poster} alt="movie poster"></img>
          <h4>Rating: {props.movie.rating}</h4>
          <h4>Plot: </h4>
            <p>{props.movie.movie_description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default GoFishDescription;