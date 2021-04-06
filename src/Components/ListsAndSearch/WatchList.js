import { useState, useEffect } from 'react';
//import Glide from "@glidejs/glide";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WatchList = ({ myMovies }) => {
    // const slider = new Glide('.glide', sliderConfiguration);

    // useEffect(() => {
    //   return () => slider.mount();
    // }, [slider])
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
          {/* {!!movies &&
            movies.map((movie) => {
              return (
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                  <Card.Body>
                    <Card.Header>{movie.title}</Card.Header>
                    <Card.Text>
                      {movie.vote_average}
                    </Card.Text>
                    <Card.Text>
                      {movie.overview}
                    </Card.Text>
                    <Button variant="primary">Add to my list</Button>
                  </Card.Body>
                </Card>
              )
            })
          } */}

        </Slider>
          </Col>
        </Row>
      </Container>
      </>
    );
};

export default WatchList;
