import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Product from './Product';

function Menu() {
  return (
    <>
      <div className="container menu" id="menu">
        {/* <!-- Menu Content --> */}
        <div className="row mt-lg-5 mt-4">
          <div className="col-md-6 d-flex order-md-1 position-relative">
            <div className="menu-text ps-2 mt-lg-5">
              <div className="menu-text-header">
                <h5 className="fs-5">Our Chai</h5>
                <h3 className="fw-bold fs-1">Choose Your</h3>
                <h3 className="fw-bold fs-1">Favorite Snacks</h3>
                <p className="text-secondary">More than 50+ type of snacks are ready to serve by our professionals.</p>
              </div>
              {/* <!-- Menu list --> */}
              <div className="menu-list d-flex mt-4 mb-4">
                <p className="m-0" data-bs-target="#carouselExampleFade" data-bs-slide-to="0">Kullad chai</p>
                <span className="ms-2 me-2">-</span>
                <p className="m-0" data-bs-target="#carouselExampleFade" data-bs-slide-to="1">Fries</p>
                <span className="ms-2 me-2">-</span>
                <p className="m-0" data-bs-target="#carouselExampleFade" data-bs-slide-to="2">Coffee</p>
                <span className="ms-2 me-2">-</span>
                <p className="m-0" data-bs-target="#carouselExampleFade" data-bs-slide-to="3">Burger</p>
              </div>
              {/* <!-- Menu Dropdown --> */}
              <div className="dropdown mb-4">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  More Menu
                </button>
                <ul className="dropdown-menu dropdown-menu-dark mt-2" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item coffee" href="#menu">Chai</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item desserts" href="#menu">Desserts</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item breakfast" href="#menu">Snacks</a></li>
                </ul>
              </div>
            </div>
            <div className="right-img-menu position-absolute d-none d-lg-block"></div>
          </div>
          {/* <!-- Menu Image --> */}
          <div id="carouselExampleFade" className="carousel slide carousel-fade col-md-6 justify-content-center d-flex position-relative" data-bs-ride="carousel">
            <div className="carousel-inner carousel-menu me-md-3">
              <div className="carousel-item active">
                <img src="../img/Burger.jpeg" className="d-block w-100" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src="../img/frenchFries.jpeg" className="d-block w-100" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src="../img/froathCoffee.jpeg" className="d-block w-100" alt="Slide 3" />
              </div>
              <div className="carousel-item">
                <img src="../img/burger&chai.jpeg" className="d-block w-100" alt="Slide 4" />
              </div>
            </div>
            {/* <!-- Controls --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Product />
    </>
  );
}
export default Menu;
