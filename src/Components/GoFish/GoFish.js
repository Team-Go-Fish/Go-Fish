import { useState, useEffect } from 'react';
import gofish from './goFishBro.png';
// import GoFishModal from './GoFishModal';
import Description from '../ListsAndSearch/Description.js';
import axios from 'axios';

const GoFish = ({ popular }) => {
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState({});

  const clickHandler = async () => {
    const random = Math.floor(Math.random() * (popular.length - 1));

    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=4bcf0035&t=${popular[random].title}`);
      setMovie(response.data);
      toggleModal();
    }
    catch (err) {
      console.log(err);
    }
  };


  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="go-fish">
    <img
      src={gofish}
      alt=""
      onClick={() => clickHandler()}
    ></img>
    {modal && (<Description show={modal} onHide={toggleModal} movie={movie} />)}
    </div>
  );
};

export default GoFish;