import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

//TODO -- HARDCODED NOTIFICATIONS. Use if functionality does not work by presentation time
// const NotificationsModal = (props) => {
//   const [modalShow, setModalShow] = useState(false);


//   return (

//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           My Notifications
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>
//         Jack wants to be friends!
//         </p>
//         <p>
//         Dorien wants to be friends!
//         </p>
//         <p>
//         You and Nick have a matched movie!
//         </p>
//         <p>
//         Jake wants to be friends!
//         </p>
//         <p>
//         You and Mason have a matched movie!
//         </p>
//         <p>
//         Malcolm wants to be friends!
//         </p>
//         <p>
//         Kevin wants to be friends!
//         </p>
//         <p>
//         You and Ryne have a matched movie!
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };



const NotificationsModal = (props) => {
  let user = props.user;
  let userID = props.userID;
  let friends = props.friends;
  let myMovies = props.myMovies;
  const [modalShow, setModalShow] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [movieModal, setMovieModal] = useState(false);
  const [movieToShow, setMovieToShow] = useState({});

  const handleClick = (e) => {
    e.persist();
    const tName = e.target.name;
    if (tName === 'newFriend') {
      setMovieToShow();
    } else if (tName === 'matchedMovie') {

    }
  }

  useEffect(() => {
    const initialLoad = async () => {
      try {
        const url = `http://localhost:3005/notifications/${userID}`
        const response = await axios.get(url);
        await setNotifications(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    initialLoad();
  }, []);


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
        {!!notifications &&
        notifications.map((notification) => {
          if (notification.notification_type === 'newFriend') {
            return (
            <Container>
              <Row>
                <Col md="auto">
                  <p>{notification.notification_message}</p>
                </Col>
                <Col>
                  <Button name="newFriend" className="float-right" onClick={handleClick}>Accept</Button>
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
                    <Button name="matchedMovie" className="float-right" onClick={handleClick}>Show Movie</Button>
                  </Col>
                </Row>
              </Container>
              )
          }
        })}

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationsModal;