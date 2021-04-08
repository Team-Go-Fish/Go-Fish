import { useState, useEffect } from 'react';
//import Glide from "@glidejs/glide";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Description from './Description.js';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

////////////changed from myMovies to movies for demo sake/////////////
const WatchList = ({ myMovies, user, getMyMovies }) => {

  const [modalShow, setModalShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [render, setRender] = useState(false);

  const getInfo = (e) => {
    axios.get(`http://www.omdbapi.com/?apikey=4bcf0035&t=${e.target.value}`)
    .then((res) => setMovieInfo(res.data))
    .then(() => setModalShow(true))
    .catch((err) => console.log(err))
  }

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
      {(myMovies) && (
        <>
        <Container>
        <h4><strong>My Movies</strong></h4>
          <Row>
            <Col>

          <Slider {...settings}>
          {
                myMovies.map((movie) => {
                  return (
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                      <Card.Body>
                        <Card.Header>{movie.title}</Card.Header>
                        <Card.Text>
                          {movie.rating}
                        </Card.Text>
                        <Button variant="outline-info" value={movie.title} id={movie.id} onClick={(e) => getInfo(e)}>Info</Button>
                        <Description
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          movie={movieInfo}
                        /> {' '}
                        {/* modify button below later */}
                        {/* <Button variant="outline-info" id={user.email} onClick={(e) => addMovie(e)}>Add to My List</Button> */}
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
      )}
      </>
    );
};

export default WatchList;
