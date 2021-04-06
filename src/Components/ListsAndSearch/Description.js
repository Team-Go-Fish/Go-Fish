import React, { useState, useEffect } from 'react';
import { Button, Modal, Col, Row, Container, Form } from 'react-bootstrap';
const axios = require('axios');
// import 'bootstrap/dist/css/bootstrap.min.css';


function Description(props) {
  return (

    props.movie.Title ?

    (
      <>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.movie.Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Rating: {props.movie.Rated}</h4>
            <h4>Runtime: {props.movie.Runtime}</h4>
            <h4>Genre: {props.movie.Genre}</h4>
            <h4>Plot: </h4>
            <p>{props.movie.Plot}</p>
            {
              props.movie.Ratings ?
                props.movie.Ratings.map((review) => {
                  return (
                    <>
                      <p><strong>{review.Source}: </strong></p>
                      <p>{review.Value}</p>
                    </>
                  )
                }) : null
            }

          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    ) : null
  );

};

export default Description;