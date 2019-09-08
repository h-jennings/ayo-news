import React from 'react';
import './Home.scss';
import Header from '../Header';
import News from '../News';
import Footer from '../Footer';

const Home = () => (
  <div className="home">
    <Header />
    <News />
    <Footer />
  </div>

);

export default Home;
