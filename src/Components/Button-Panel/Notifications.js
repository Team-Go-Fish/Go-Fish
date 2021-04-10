import React from 'react';
import { Button } from 'react-bootstrap';
import NotificationsModal from './NotificationsModal';

const Notifications = ({ userID, user, friends, myMovies, notifications }) => {
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
        userID={userID}
        notifications={notifications}
        friends={friends}
        myMovies={myMovies}
      />
    </>
  )
};

export default Notifications;