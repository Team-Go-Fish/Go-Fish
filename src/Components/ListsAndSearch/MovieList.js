import { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Description from './Description';
import axios from 'axios';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ movies, user, getMyMovies }) => {

  const [modalShow, setModalShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [render, setRender] = useState(false);

  const getInfo = (e) => {
    axios.get(`http://www.omdbapi.com/?apikey=4bcf0035&t=${e.target.value}`)
    .then((res) => setMovieInfo(res.data))
    .then(() => setModalShow(true))
    .catch((err) => console.log(err))
  }

  const addMovie = async (e, movie) => {
    console.log('I am in the addMovie function on the Front-end!')
    e.persist();
    try {
      const response = await axios.get(`http://localhost:3005/user/${user.email}`);
      const userID = response.data;

      const options = {
        method: 'POST',
        url: `http://localhost:3005/movies/${userID}`,
        headers: {
          type: 'Application/json'
        },
        data: movie
      };

      console.log(movie);

      const postMovie = await axios(options);
      console.log(postMovie);

    //   axios.post(`http://localhost:3005/movies/${e.target.id}`)
    // .then(() => getMyMovies(e.target.id))
    // .catch((err) => console.log(err))
    }
    catch (error) {
      console.log(error);
    }
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
      <Container>
      <h4><strong>Popular Movies</strong></h4>
        <Row>
          <Col size="xs">

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
                        <Button variant="outline-info" value={movie.title} id={movie.id} onClick={(e) => getInfo(e)}>Info</Button>
                        <Description
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          movie={movieInfo}
                        /> {' '}
                        <Button variant="outline-info" value={movie} onClick={(e) => addMovie(e, movie)}>Add to My List</Button>
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
      <hr></hr>
    </>
  );
};

export default MovieList;