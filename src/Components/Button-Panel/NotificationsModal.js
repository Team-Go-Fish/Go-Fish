import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const NotificationsModal = (props) => {
  const [modalShow, setModalShow] = useState(false);


  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Notifications
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        Jack wants to be friends!
        </p>
        <p>
        Dorien wants to be friends!
        </p>
        <p>
        You and Nick have a matched movie!
        </p>
        <p>
        Jake wants to be friends!
        </p>
        <p>
        You and Mason have a matched movie!
        </p>
        <p>
        Malcolm wants to be friends!
        </p>
        <p>
        Kevin wants to be friends!
        </p>
        <p>
        You and Ryne have a matched movie!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationsModal;