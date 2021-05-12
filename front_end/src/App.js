import React, { useState } from 'react';
import GlobalStyles from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Modal from './components/Modal/Modal';
import Slider from './components/Slider/Slider';
import { SliderData } from './components/Slider/SliderData';

// import ArtInfo from './components/ArtInfo/ArtInfo';
import Articles from './Pages/Articles/Articles';

import Article1 from './Pages/Article1/Article1';
import Article2 from './Pages/Article2/Article2';
import Article3 from './Pages/Article3/Article3';
import Article4 from './Pages/Article4/Article4';
import AdminPage from './Pages/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Router>
      <GlobalStyles />

      <Navbar openModal={openModal} />

      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* <Slider slides={SliderData} /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/articles' exact component={Articles} />

        <Route path='/article1' exact component={Article1} />
        <Route path='/article2' exact component={Article2} />
        <Route path='/article3' exact component={Article3} />
        <Route path='/article4' exact component={Article4} />

        <Route path='/admin' exact component={AdminPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
