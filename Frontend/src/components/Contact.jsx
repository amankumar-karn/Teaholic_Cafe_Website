import React from 'react';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
      {/* Jumbotron */}
      <div className="container-fluid jumbotron jumbotron-contact">
        <div className="container">
          <div className="jumbotron-text text-center">
            <h1 className="text-warning text-uppercase">Contact us</h1>
          </div>
        </div>
      </div>
      {/* End Jumbotron */}

      {/* Contact */}
      <div className="container-fluid p-0 m-0" id="contact">
        <div className="row">
          {/* Connect with us */}
          <div className="col-lg-4 d-flex order-lg-1 justify-content-center bg-white p-0">
            <div className="contact-us pt-5 pb-5">
              <div className="connect">
                <h2>Connect With Us</h2>
                <ul className="list-unstyled mt-4">
                  <li>
                    <i className="fa-solid fa-phone text-success"></i>
                    <span>+91 8105858900</span>
                  </li>
                  <li className="mt-3">
                    <i className="fa-brands fa-instagram text-success"></i>
                    <span>Teaholic</span>
                  </li>
                  <li className="mt-3">
                    <i className="fa-solid fa-envelope text-success"></i>
                    <span>teaholic.chai@gmail.com</span>
                  </li>
                  <li className="mt-3">
                    <i className="fa-solid fa-location-dot text-success"></i>
                    <span>AECS Layout, Bengaluru</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Connect with us */}

          {/* Map */}
          <div className="col-lg-4 d-flex order-lg-0 p-0">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0876262169963!2d77.71201427536094!3d12.966244487348625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1307cf1a2c49%3A0x7b64757bb9a11837!2sTeaHolic%20-%20The%20kullad%20Tea!5e0!3m2!1sen!2sin!4v1716915959817!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* End Map */}

          {/* Form */}
          <div className="col-lg-4 d-flex order-lg-2">
            <div className="container p-5">
              <div className="form-nama">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="form-email">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="form-pesan">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </div>
          {/* End Form */}
        </div>
      </div>
      {/* End Contact */}
      <Footer />
    </>
  );
};

export default Contact;
