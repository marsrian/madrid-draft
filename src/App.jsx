import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;