import React from 'react';
import { Link } from "react-router-dom";
import Quotes from './Quotes';
import Footer from './Footer';
import Menu from './Menu';
import Reviews from './Reviews';

function Home() {
  return (
    <>
      <div className="container-fluid jumbotron">
        <div className="container">
          <div className="jumbotron-text text-center">
            <h3 className="m-0 text-warning">CHAI</h3>
            <h1 className="m-0">Enjoy Your</h1>
            <h1 className="m-0 fw-bold">Kullad CHAI.</h1>
            <p className="m-0 pt-3">Savor the authentic taste of Kullad Chai, steeped in tradition and served in a rustic clay cup.</p>
            <p className="m-0">Enjoy the perfect blend of spices for an unmatched, aromatic tea experience.</p>
            <div className="jumbotron-button text-center mt-5">
              <Link to="/contact">
                <button type="button" className="btn btn-success pe-4 ps-4 pt-3 pb-3">Get Yours Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Menu />
      <Quotes />
      {/* <Gallery /> */}
      <Reviews />
      <Footer/>
    </>
  );
}

export default Home;