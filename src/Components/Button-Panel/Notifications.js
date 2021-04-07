import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import NotificationsModal from './NotificationsModal';

const Notifications = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-info" onClick={() => setModalShow(true)}>
        Notifications
      </Button>

      <NotificationsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
};

export default Notifications;