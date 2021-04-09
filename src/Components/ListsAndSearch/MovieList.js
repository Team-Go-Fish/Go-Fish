import { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Description from './Description';
import axios from 'axios';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactTooltip from "react-tooltip";
import StarRatings from "react-star-ratings";

const MovieList = ({ movies, user, getMyMovies }) => {

  const [modalShow, setModalShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [toolTip, setToolTip] = useState(false);
  // const [rating, setRating] = useState(newRating);

  const getInfo = (e) => {
    axios.get(`https://www.omdbapi.com/?apikey=4bcf0035&t=${e.target.value}`)
      .then((res) => setMovieInfo(res.data))
      .then(() => setModalShow(true))
      .catch((err) => console.log(err))
  }

  const addMovie = async (movie) => {
    try {
      const response = await axios.get(`https://3.136.112.63/user/${user.email}`);
      const userID = response.data;
      console.log(userID)

      const options = {
        method: 'POST',
        url: `https://3.136.112.63/movies/${userID}`,
        headers: {
          type: 'Application/json'
        },
        data: movie
      };
      const postMovie = await axios(options);
      getMyMovies(userID);
      return postMovie;
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
    spacing: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        }
      }
    ]
  };

  setTimeout(() => setToolTip(true), 5000);

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
                      <Card.Img variant="top" style={{ maxWidth: '100%' }} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                      <Card.Body id={movie.title}>
                        <Card.Header
                          style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
                          data-tip data-for={movie.title}
                        >
                          {movie.title}
                          {toolTip && <ReactTooltip id={movie.title} place="bottom" effect="solid">
                            {document.getElementById(`${movie.title}`).id}
                          </ReactTooltip>}

                        </Card.Header>
                        <Card.Text>
                          {/* {movie.vote_average} */}
                          <StarRatings
                            rating={movie.vote_average / 2}
                            starRatedColor="blue"
                            // changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                            starSpacing="3px"
                          />
                        </Card.Text>
                        <Button variant="outline-info"
                          value={movie.title}
                          id={movie.id}
                          onClick={(e) => getInfo(e)}
                        >Info</Button>
                        <Description
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          movie={movieInfo}
                        /> {' '}
                        <Button variant="outline-info" onClick={() => addMovie(movie)}>Add</Button>
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