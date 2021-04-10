import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AboutModal from './AboutModal.js';

const About = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="outline-info" onClick={() => setModalShow(true)}>
        About
      </Button>

      <AboutModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
};

export default About;