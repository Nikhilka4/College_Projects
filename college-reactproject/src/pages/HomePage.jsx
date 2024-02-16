import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Results from '../components/ResultsSearch';
const HomePage = () => {
  return (
    <>
    <Header showLogin={true} />
    <Results />
    <Footer />
    </>
  );
}

export default HomePage;