import React, { useState, useEffect } from 'react';
import { Button, Modal, Col, Row, Container, Form } from 'react-bootstrap';
const axios = require('axios');
// import 'bootstrap/dist/css/bootstrap.min.css';


function Description(props) {

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
              {props.movie.overview}

              </Col>
            </Row>
          </Container>

        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => addPlant()}>Add</Button> */}
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};

export default Description;