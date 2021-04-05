import './App.css';
import React, { useEffect } from "react"
import Glide from '@glidejs/glide'


import "./styles/styles.scss"
const sliderConfiguration= {
  gap: 20,
  perView: 2,
  startAt: 0,
  type: "slider"
};

const App = () => {

  const slider = new Glide('.glide', sliderConfiguration);




  useEffect(() => {
    return () => slider.mount()
  }, [slider])


  return (
    <div className="App">
      <h1>GOFISH</h1>
      <div className="login-container">
      {/* // do login / signup shit */}
      </div>

      <div className="button-panel">
       {/* // notification
       //. gofish
       // friends */}
      </div>

      <div className="search-bar">
      </div>

     <div className="lists">
        <div className="movie-list">
        </div>

        <div className="watch-list">
        <div className='glide'>
        <div className='glide__track' data-glide-el='track'>
          <ul className='glide__slides'>
            <li className='glide__slide slider'>1</li>
            <li className='glide__slide slider'>2</li>
            <li className='glide__slide slider'>3</li>
            <li className='glide__slide slider'>4</li>
          </ul>
        </div>
        <div className='glide__arrows' data-glide-el='controls'>
          <button
            className='glide__arrow glide__arrow--prev'
            data-glide-dir='<'
          >
            prev
          </button>
          <button
            className='glide__arrow glide__arrow--next'
            data-glide-dir='>'
          >
            next
          </button>
        </div>
      </div>
        </div>
      </div>

    </div>
  );
}

export default App;
