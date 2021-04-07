import React, { useState } from 'react';
import Friends from './Friends.js';
// import users from '../../exampleData.js';
import Notifications from './Notifications.js';
import { Row, Col, Container } from 'react-bootstrap';

const ButtonPanel = ({ user, friends, myMovies }) => {

  return (
    //Notifications
    <>
      <Container>
        <Row>
          <Col>
            <Notifications></Notifications>
          </Col>
          <Col>
            <Friends user={user} friends={friends} myMovies={myMovies}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ButtonPanel;
