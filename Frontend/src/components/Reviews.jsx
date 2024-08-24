import React from 'react';
import Footer from './Footer';

function Reviews() {
  return (
    <>
      <div className="container-fluid" id="reviews">
        <div className="container">
          <div className="menu-title mb-5">
            <h2 className="fw-bold text-center">Customer Reviews</h2>
          </div>

          <div className="row review align-items-center justify-content-center">
            {/* 1 */}
            <div className="col-lg-6 mb-3">
              <div className="review-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="profile-img">
                      <img src="../img/review/review1.jpg" alt="Review 1" />
                    </div>
                    <div className="name-user">
                      <strong>Sovit Khatri</strong>
                      <span>@sovitkhatri</span>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="customer-comment">
                  <p>
                  Teaholic Cafe's Kullad chai is a delightful experience, blending traditional
                  flavors with a rich, aromatic taste. Served in authentic clay cups, it offers
                  a unique and refreshing tea experience that keeps customers coming back for more.
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="col-lg-6 mb-3">
              <div className="review-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="profile-img">
                      <img src="../img/review/review2.png" alt="Review 2" />
                    </div>
                    <div className="name-user">
                      <strong>Aman Kumar</strong>
                      <span>@kumaraman</span>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="customer-comment">
                  <p>
                  The staff management at Teaholic Cafe is exceptional, ensuring every 
                  customer feels welcomed and well-cared for. Their professionalism and 
                  friendly demeanor create a warm and inviting atmosphere, making each visit a delightful experience.
                  </p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="col-lg-6 mb-3">
              <div className="review-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="profile-img">
                      <img src="../img/review/review3.png" alt="Review 3" />
                    </div>
                    <div className="name-user">
                      <strong>Akshansh Tripathi</strong>
                      <span>@liability</span>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <div className="customer-comment">
                  <p>
                  The taste at Teaholic is simply unparalleled, offering a delightful fusion of flavors that leave a lasting impression. Their commitment to hygiene is evident in every aspect, ensuring a clean and safe environment that enhances the overall dining experience.
                  </p>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="col-lg-6 mb-3">
              <div className="review-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="profile-img">
                      <img src="../img/review/review4.png" alt="Review 4" />
                    </div>
                    <div className="name-user">
                      <strong>Arun Yadav</strong>
                      <span>@arunyadav</span>
                    </div>
                  </div>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="customer-comment">
                  <p>
                  Teaholic's best offer deals are the perfect blend of value and taste, providing customers with irresistible flavors at unbeatable prices. The quality of their products remains consistently high, making every sip and bite an extraordinary experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-black-50 pt-3 read-all">Read all reviews <img src="https://img.icons8.com/ios-filled/14/000000/up-right-arrow.png" alt="Arrow" /></p>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Reviews;
