import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Carousel></Carousel>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;