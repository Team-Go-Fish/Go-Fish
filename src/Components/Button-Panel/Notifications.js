import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import NotificationsModal from './NotificationsModal';

const Notifications = ({ user, friends, myMovies }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="outline-info" onClick={() => setModalShow(true)}>
        Notifications
      </Button>

      <NotificationsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={user}
        friends={friends}
        myMovies={myMovies}
      />
    </>
  )
};

export default Notifications;