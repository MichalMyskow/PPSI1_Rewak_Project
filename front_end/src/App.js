import React from 'react';
import GlobalStyles from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import {SliderData} from './components/Slider/SliderData';
import Article from './components/ArticleTemplate/ArticleTemplate';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Slider slides = {SliderData} />
      <Article />
      <Footer />
    </Router>
  );
}

export default App;
