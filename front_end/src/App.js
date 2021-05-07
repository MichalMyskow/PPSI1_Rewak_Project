import React from 'react';
import GlobalStyles from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import { SliderData } from './components/Slider/SliderData';

import ArtInfo from './components/ArtInfo/ArtInfo';

import Article1 from './Pages/Article1/Article1';
import Article2 from './Pages/Article2/Article2';
import Article3 from './Pages/Article3/Article3';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Slider slides={SliderData} />
      <ArtInfo />
      <Switch>
        <Route path='/article1' exact component={Article1} />
        <Route path='/article2' exact component={Article2} />
        <Route path='/article3' exact component={Article3} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
