'use client';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CountDownTime from '../elements/CountDownTime';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.aaa',
    clickable: true,
  },
};
export default function Project1() {
  return (
    <>
      <section className="tf-section project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <h2 className="title">
                  Come and be part of this adventure <br className="show-destop" /> Three steps
                </h2>
              </div>
            </div>

            {/* <div className="col-md-12">
              <div className="project-wrapper">
                <div
                  className="image-wrapper"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <div className="swiper-container slider-1">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                      <SwiperSlide>
                        <img
                          src="/assets/images/slider/img_slider_1.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/assets/images/slider/img_slider_1.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/assets/images/slider/img_slider_1.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/assets/images/slider/img_slider_1.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src="/assets/images/slider/img_slider_1.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination aaa bottom_0" />
                  </div>
                </div>
                <div className="content-wrapper">
                  <div
                    className="content_inner"
                    data-aos="fade-left"
                    data-aos-duration={1200}
                  >
                    <div className="wrapper">
                      <h4>Codyfight IGO</h4>
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>
                      <ul className="price">
                        <li>
                          <span>Price: $0.4</span>
                        </li>
                        <li>
                          <span>Total sales: $4720</span>
                        </li>
                      </ul>
                      <h6 className="featured_title">Sale end in</h6>
                      <div className="featured-countdown">
                        <span className="slogan" />
                        <CountDownTime />
                        <ul className="desc">
                          <li>day</li>
                          <li>hou</li>
                          <li>min</li>
                          <li>sec</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* First move */}
            <div className="col-md-12">
              <div className="project-wrapper">
                <div
                  className="image-wrapper"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <div className="swiper-container slider-1">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                      <SwiperSlide>
                        <img
                          src="/assets/images/bankablePictures/titanicDi.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination aaa bottom_0" />
                  </div>
                </div>

                <div className="content-wrapper">
                  <div
                    className="content_inner"
                    data-aos="fade-left"
                    data-aos-duration={1200}
                  >
                    <div className="wrapper">
                      <h4>Inscription</h4>
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>
                      {/* <ul className="price">
                        <li>
                          <span>Price: $0.4</span>
                        </li>
                        <li>
                          <span>Total sales: $4720</span>
                        </li>
                      </ul> */}
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>
                      <h6 className="featured_title">Sale end in</h6>
                      <div className="featured-countdown">
                        <span className="slogan" />
                        <p className="desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent varius risus sed pellentesque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second move */}
            <div className="col-md-12">
              <div className="project-wrapper">
                <div
                  className="image-wrapper"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <div className="swiper-container slider-1">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                      <SwiperSlide>
                        <img
                          src="/assets/images/bankablePictures/badboyRideOrDie.jpeg"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination aaa bottom_0" />
                  </div>
                </div>

                <div className="content-wrapper">
                  <div
                    className="content_inner"
                    data-aos="fade-left"
                    data-aos-duration={1200}
                  >
                    <div className="wrapper">
                      <h4>Make your Movies library</h4>
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>

                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>
                      <h6 className="featured_title">Get your dMovie easily</h6>
                      <div className="featured-countdown">
                        <span className="slogan" />
                        <p className="desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent varius risus sed pellentesque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third move */}
            <div className="col-md-12">
              <div className="project-wrapper">
                <div
                  className="image-wrapper"
                  data-aos="fade-in"
                  data-aos-duration={1000}
                >
                  <div className="swiper-container slider-1">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                      <SwiperSlide>
                        <img
                          src="/assets/images/bankablePictures/TitanicDiWins.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    <div className="swiper-pagination aaa bottom_0" />
                  </div>
                </div>

                <div className="content-wrapper">
                  <div
                    className="content_inner"
                    data-aos="fade-left"
                    data-aos-duration={1200}
                  >
                    <div className="wrapper">
                      <h4>Vendez vos dMovies</h4>
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>
                      {/* <ul className="price">
                        <li>
                          <span>Price: $0.4</span>
                        </li>
                        <li>
                          <span>Total sales: $4720</span>
                        </li>
                      </ul> */}
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent varius risus sed pellentesque
                      </p>
                      <h6 className="featured_title">Sale end in</h6>
                      <div className="featured-countdown">
                        <span className="slogan" />
                        <p className="desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent varius risus sed pellentesque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* END Third move */}
          </div>
        </div>
      </section>
    </>
  );
}
