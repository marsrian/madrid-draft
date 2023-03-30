import { Carousel } from 'flowbite-react';
import React from 'react';

const Slider = () => {
    return (
      <div className="h-56 sm:h-64 md:h-screen">
        <Carousel>
          <img
              src="https://i.ibb.co/xjfkdjs/1.jpg"
              alt="..."
          />
          <img
              src="https://i.ibb.co/2vv1N80/2.jpg"
              alt="..."
          />
          <img
            src="https://i.ibb.co/6nvJhj5/3.jpg"
            alt="..."
          />
          <img
              src="https://i.ibb.co/kykPgqC/4.jpg"
              alt="..."
          />
          <img
              src="https://i.ibb.co/W2hCwC4/5.jpg"
              alt="..."
          />
        </Carousel>
      </div>
    );
};

export default Slider;