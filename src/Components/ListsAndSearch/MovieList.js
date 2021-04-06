import { useState, useEffect } from 'react';
import Glide from "@glidejs/glide";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Description from './Description';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MovieList = ({ movies }) => {

  const [modalShow, setModalShow] = useState(false);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    spacing: 2
  };

  return (
    <>
      <Container>
        <Row>
          <Col>

            <Slider {...settings}>
              {
                movies.map((movie) => {
                  return (
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                      <Card.Body>
                        <Card.Header>{movie.title}</Card.Header>
                        <Card.Text>
                          {movie.vote_average}
                        </Card.Text>
                        {/* {
                          movie.overview.length > 200 ?
                            <Card.Text style={{ textAlign: 'left', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                              {movie.overview.slice(0, 150)}...
                            </Card.Text>
                            : <Card.Text>
                              {movie.overview}
                            </Card.Text>
                        } */}
                        <Button onClick={() => setModalShow(true)}>Info</Button>
                        <Description
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          movie={movie}
                        /> {' '}
                        <Button>Add to My List</Button>
                        {/* <Button variant="primary">Add to my list</Button> */}
                      </Card.Body>
                    </Card>
                  )
                })
              }

            </Slider>
          </Col>
        </Row>
      </Container>
    </>
  );


};

export default MovieList;
