import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Gallery() {
  return (
    <>
      <div className="container-fluid" id="gallery">
        <div className="menu-title mb-3">
          <h2 className="text-center fw-bold"></h2>
        </div>
        <div className="container-fluid gallery">
          <div className="row">
            {/* Left Landscape Landscape images and portrait images */}
            <div className="col-lg-4 mt-lg-5">
              <div className="row">
                <a className="landscape-gallery" href="../img/ChaiPlace.jpeg" data-fslightbox>
                  <img src="../img/ChaiPlace.jpeg" alt="Chai Place" className="img-fluid" />
                </a>
              </div>
              <div className="row mt-3">
                <a className="landscape-gallery" href="../img/sittingPlace.jpeg" data-fslightbox>
                  <img src="../img/sittingPlace.jpeg" alt="Sitting Place" className="img-fluid" />
                </a>
              </div>
            </div>
            {/* Middle Long Portrait */}
            <div className="col-lg-4 mt-lg-5 mb-3">
              <div className="row">
                <a className="portrait-gallery" href="../img/shopFront.jpeg" data-fslightbox>
                  <img src="../img/shopFront.jpeg" alt="Shop Front" className="img-fluid" style={{ height: '500px', objectFit: 'cover' }} />
                </a>
              </div>
            </div>
            {/* Right Landscape */}
            <div className="col-lg-4 mt-lg-5">
              <div className="row">
                <a className="landscape-gallery" href="../img/sittingPlace.jpeg" data-fslightbox>
                  <img src="../img/sittingPlace.jpeg" alt="Sitting Place" className="img-fluid" />
                </a>
              </div>
              <div className="row mt-3">
                <a className="landscape-gallery" href="../img/front_out.jpeg" data-fslightbox>
                  <img src="../img/front_out.jpeg" alt="Front Out" className="img-fluid" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
