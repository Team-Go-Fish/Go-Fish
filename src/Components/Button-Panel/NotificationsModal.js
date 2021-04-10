/*
The notifications modal imports all open notifications from the database. The notifications can be one of two types - either 'newFriend' or 'matchedMovie'. Depending on the type, a different button will appear beside the notification.

If 'newFriend', a button to accept will appear. Upon pressing that button, the notification will be removed from the displayed list and the database will update that entry to be 'closed' and will not be displayed upon a subsequent page refresh.

If 'matchedMovie', a button to display the movie will appear. This will pass the movie object to the 'GoFishDescription' modal, displaying the movie's details. The notification will be removed from the displayed list upon viewing and the database will be refreshed to 'close' that notification.
*/

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import GoFishDescription from './GoFishDescription';

const NotificationsModal = (props) => {
  let myMovies = props.myMovies;
  let notifications = props.notifications;
  const [displayedNotifications, setDisplayedNotifications] = useState([]);
  const [movieModal, setMovieModal] = useState(false);
  const [movieToShow, setMovieToShow] = useState({});

  const handleClick = (e) => {
    e.persist();
    const tName = e.target.name;
    const tValue = e.target.value;
    if (tName === 'newFriend') {
      let tempNotifications = displayedNotifications.filter(notification => {
        if (notification.notification_type === 'matchedMovie') {
          return true;
        } else {
          return notification.id.toString() !== tValue;
        }
      });
      setDisplayedNotifications(tempNotifications);
      updateDB(tValue);
    } else if (tName === 'matchedMovie') {
      let movieID = 0;
      notifications.forEach((notification) => {
        if (notification.id.toString() === tValue) {
          movieID = notification.movieid;
        }
      });
      myMovies.forEach((movie) => {
        if (movie.moviedbid === movieID) {
          setMovieToShow(movie);
        }
      });
      setMovieModal(true);
      let tempNotifications = displayedNotifications.filter((notification) => {
        if (notification.notification_type === 'newFriend') {
          return true;
        } else {
          return notification.id.toString() !== tValue;
        }
      });
      setDisplayedNotifications(tempNotifications);
      updateDB(tValue);
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    const initialLoad = async () => {
      try {
        const url = `https://gofishmovies.com/notifications/${userID}`
        const response = await axios.get(url);
        await setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
=======
  const updateDB = (notificationID) => {
    const url = `http://localhost:3005/notifications/${notificationID}`;
    const body = {
      notification_status: 'closed'
>>>>>>> 5cc8c814014e8f80049ce61300c96fe65b58d088
    };
    axios.put(url, body)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };

  const toggleModal = () => {
    setMovieModal(!movieModal);
  };

  useEffect(() => {
    setDisplayedNotifications(notifications);
  }, [notifications]);


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
        {displayedNotifications.length ?
          !!displayedNotifications &&
            displayedNotifications.map((notification) => {
              if (notification.notification_type === 'newFriend') {
                return (
                <Container>
                  <Row>
                    <Col md="auto">
                      <p>{notification.notification_message}</p>
                    </Col>
                    <Col>
                      <Button name="newFriend" value={notification.id} className="float-right" onClick={handleClick}>Accept</Button>
                    </Col>
                  </Row>
                </Container>
                )
              } else {
                return (
                  <Container>
                    <Row>
                      <Col md="auto">
                        <p>{notification.notification_message}</p>
                      </Col>
                      <Col>
                        <Button name="matchedMovie" value={notification.id} className="float-right" onClick={handleClick}>Show Movie</Button>
                      </Col>
                    </Row>
                  </Container>
                  )
              }
            })
        :
          <Container>
          <Row>
            <Col md="auto">
              <p>no notifications</p>
            </Col>
          </Row>
        </Container>
        }

        {movieModal && (<GoFishDescription show={movieModal} onHide={toggleModal} movie={movieToShow} id="goFish"/>)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationsModal;