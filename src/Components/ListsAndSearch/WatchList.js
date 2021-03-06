import { useState, useEffect } from 'react';
//import Glide from "@glidejs/glide";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Description from './Description.js';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from "react-star-ratings";

const WatchList = ({ myMovies, user, getMyMovies, userID }) => {

  const [modalShow, setModalShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  const getInfo = (e) => {
    axios.get(`http://www.omdbapi.com/?apikey=4bcf0035&t=${e.target.value}`)
    .then((res) => setMovieInfo(res.data))
    .then(() => setModalShow(true))
    .catch((err) => console.log(err))
  }

  const removeMovie = async (movie) => {
    console.log(`I am currently removing ${movie.title}`);
    try {
      const options = {
        method: 'DELETE',
        url: `http://localhost:3005/movies/${userID}?movieId=${movie.movieid}`,
        headers: {
          type: 'Application/json'
        }
      };
      const removeMovie = await axios(options);
      console.log(removeMovie);
      getMyMovies(userID);
    }
    catch (error) {
      console.log(error);
    }
  };

    // const settings = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 2,
    //   spacing: 2
    // };
    // const settings1 = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   spacing: 2
    // };
    // const settings2 = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 2,
    //   slidesToScroll: 2,
    //   spacing: 2
    // };
    // const settings3 = {
    //   dots: false,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 2,
    //   spacing: 2
    // };

    // let sliderSettings = settings;

    let toShow;
    let toScroll;
    let varW;

    if (myMovies.length === 1) {
      toShow = 1;
      toScroll = 1;
      varW = true;
    } else if (myMovies.length === 2) {
      toShow = 2;
      toScroll = 2;
      varW = true;
    } else if (myMovies.length === 3) {
      toShow = 3;
      toScroll = 2;
      varW = true;
    } else {
      toShow = 4;
      toScroll = 2;
      varW = false;
    }

    console.log(window.innerWidth / 2)

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: toShow,
      slidesToScroll: toScroll,
      spacing: 2,
      autoplay: false,
      autoplaySpeed: 3000,
      variableWidth: varW,
      // centerMode: true,
      // centerPadding: ,
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
                      <Card.Img variant="top" style={{ maxWidth: '100%' }} src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} />
                      <Card.Body>
                        <Card.Header
                        style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
                        >{movie.title}</Card.Header>
                        <Card.Text>
                          <StarRatings
                            rating={parseInt(movie.rating) / 2}
                            starRatedColor="blue"
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                            starSpacing="3px"
                          />
                        </Card.Text>
                        <Button variant="outline-info" value={movie.title} id={movie.id} onClick={(e) => getInfo(e)}>Info</Button>
                        <Description
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          movie={movieInfo}
                        /> {' '}
                        <Button variant="outline-info" onClick={() => removeMovie(movie)}>Remove</Button>
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
