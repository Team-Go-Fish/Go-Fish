import React from 'react';
import { Container, Button, Modal } from 'react-bootstrap';



const AboutModal = (props) => {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How Do I go Fishing?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Container>
            This app will select a movie for me and a friend to watch together. Both add a collection of movies to watch and the app will give you a recommendation. Click on the <strong>fish icon</strong> on the home page to select a random movie from your own collection.
            </Container>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;