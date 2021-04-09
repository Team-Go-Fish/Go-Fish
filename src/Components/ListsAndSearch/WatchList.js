import { useState, useEffect } from 'react';
//import Glide from "@glidejs/glide";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Description from './Description.js';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatings from "react-star-ratings";

////////////changed from myMovies to movies for demo sake/////////////
const WatchList = ({ myMovies, user, getMyMovies }) => {

  const [modalShow, setModalShow] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [render, setRender] = useState(false);

  const getInfo = (e) => {
    axios.get(`https://www.omdbapi.com/?apikey=4bcf0035&t=${e.target.value}`)
    .then((res) => setMovieInfo(res.data))
    .then(() => setModalShow(true))
    .catch((err) => console.log(err))
  }

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

    // if (myMovies.length === 1) {
    //   sliderSettings = settings1;
    // } else if (myMovies.length === 2) {
    //   sliderSettings = settings2;
    // } else if (myMovies.length === 3) {
    //   sliderSettings = settings3;
    // } else {
    //   sliderSettings = settings;
    // }

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      spacing: 2,
      autoplay: false,
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
                          {/* {movie.rating} */}
                          <StarRatings
                            rating={parseInt(movie.rating)}
                            starRatedColor="blue"
                            // changeRating={changeRating}
                            numberOfStars={10}
                            name='rating'
                            starDimension="10px"
                            starSpacing="1px"
                          />
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
