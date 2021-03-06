import React from 'react';
import { Button, Modal } from 'react-bootstrap';

/*This component takes in props (movie, onHide, show) and displays a modal showing a shared movie */
function GoFishDescription(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="selected movie poster"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{overflowY: 'scroll'}}>
          <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster}`} alt=""></img>
          <h4>Rating: {props.movie.rating}</h4>
          <h4>Plot: </h4>
            <p>{props.movie.movie_description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default GoFishDescription;