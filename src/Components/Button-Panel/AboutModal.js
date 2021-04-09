import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';



const AboutModal = (props) => {
  const [modalShow, setModalShow] = useState(false);

  // useEffect(() => {
  //   const initialLoad = async () => {
  //     try {
  //       const url = `http://localhost:3005/notifications/${userID}`
  //       const response = await axios.get(url);
  //       await setNotifications(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   initialLoad();
  // }, []);


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          How Do I go Fishing
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <Container>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
            </Container>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AboutModal;