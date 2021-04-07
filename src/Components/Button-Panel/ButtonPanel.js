import React, { useState } from 'react';
import Friends from './Friends.js';
import users from '../../exampleData.js';
import Notifications from './Notifications.js';
import { Row, Col, Container } from 'react-bootstrap';

const ButtonPanel = ({ myMovies }) => {

  return (
    //Notifications
    <>
      <Container>
        <Row>
          <Col>
            <Notifications></Notifications>
          </Col>
          <Col>
            <Friends users={users.users} myMovies={myMovies} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ButtonPanel;
