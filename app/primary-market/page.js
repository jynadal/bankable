'use client';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { useState } from 'react';

import Secondary from '../../components/sections/Secondary';
import ForYou from '../../components/sections/ForYou';

import CountDownTime from '../../components/elements/CountDownTime';

export default function PrimaryMarket() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Primary Market">
        <div>
          <section className="tf-section project">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="flat-tabs"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                  >
                    <div className="wrapper_menutab">
                      <ul className="menu-tab wrapper">
                        <li
                          className={activeIndex === 1 ? 'active' : ''}
                          onClick={() => handleOnClick(1)}
                        >
                          <span>Primary</span>
                        </li>
                        <li
                          className={activeIndex === 2 ? 'active' : ''}
                          onClick={() => handleOnClick(2)}
                        >
                          <span>Secondary</span>
                        </li>
                        <li
                          className={activeIndex === 3 ? 'active' : ''}
                          onClick={() => handleOnClick(3)}
                        >
                          <span>For You</span>
                        </li>
                      </ul>
                      <div
                        className="seclect-box"
                        data-aos="fade-in"
                        data-aos-duration={800}
                      >
                        <div className="dropdown selector-drop" id="category">
                          <Link
                            href="#"
                            className="btn-selector btn-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="boder" />
                            All access
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li
                              className="dropdown-item active"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              Auctions
                            </li>
                            <li
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              Direct Selling
                            </li>
                            <li
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              Calvary Deneral
                            </li>
                          </ul>
                        </div>

                        <div className="dropdown selector-drop" id="artworks">
                          <Link
                            href="#"
                            className="btn-selector btn-link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="boder" />
                            All Block Chain
                          </Link>
                          <ul className="dropdown-menu dropdown-menu-right">
                            <li
                              className="dropdown-item active"
                              data-toggle="modal"
                              data-target="#delete_client"
                            >
                              Sort by Popularity
                            </li>
                            <li
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              Sort by Latest
                            </li>
                            <li
                              className="dropdown-item"
                              data-toggle="modal"
                              data-target="#edit_client"
                            >
                              Sort by View
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="content-tab mt40">
                      {/* Primary Market */}
                      <div
                        className="content-inner project-box-style6_wrapper"
                        style={{
                          display: `${activeIndex == 1 ? 'flex' : 'none'}`,
                        }}
                      >
                        <div className="col-md-12">
                          <div
                            className="tf-title"
                            data-aos="fade-up"
                            data-aos-duration={800}
                          >
                            <h2 className="title">Our featured projects</h2>
                            <div className="featured-countdown style2">
                              <p className="featured_title">Sale end in</p>
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

                        <div className="project-box-style4">
                          <div className="image">
                            <div className="img_inner">
                              <img
                                src="/assets/images/common/project_54.png"
                                alt=""
                              />
                              <img
                                className="shape"
                                src="/assets/images/common/shap.png"
                                alt=""
                              />
                            </div>
                            <div className="label">1ST Phase</div>
                          </div>

                          <div className="content">
                            <h5 className="heading">
                              <Link href="/project-details">I Robot</Link>
                            </h5>
                            <p className="desc">
                              Ookeenga is the no.1 Vertical Multiplayer Real
                              Time Strategy Game with breathtaking 3D visuals...
                            </p>
                            <ul>
                              <li>
                                <p className="text">Matics</p>
                                <p className="price">6</p>
                              </li>
                              <li>
                                <p className="text">Movie</p>
                                <p className="price">46/100</p>
                              </li>
                              <li>
                                <p className="text">Selling Process</p>
                                <p className="price">Auction</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="project-box-style4">
                          <div className="image">
                            <div className="img_inner">
                              <img
                                src="/assets/images/common/project_55.png"
                                alt=""
                              />
                              <img
                                className="shape"
                                src="/assets/images/common/shap.png"
                                alt=""
                              />
                            </div>
                            <div className="label">1ST Phase</div>
                          </div>
                          <div className="content">
                            <h5 className="heading">
                              <Link href="/project-details">Ocean's 11</Link>
                            </h5>
                            <p className="desc">
                              Ookeenga is the no.1 Vertical Multiplayer Real
                              Time Strategy Game with breathtaking 3D visuals...
                            </p>
                            <ul>
                              <li>
                                <p className="text">Matics</p>
                                <p className="price">10</p>
                              </li>
                              <li>
                                <p className="text">Movie</p>
                                <p className="price">6/100</p>
                              </li>
                              <li>
                                <p className="text">Selling Process</p>
                                <p className="price">- </p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="project-box-style4">
                          <div className="image">
                            <div className="img_inner">
                              <img
                                src="/assets/images/common/project_15.png"
                                alt=""
                              />
                              <img
                                className="shape"
                                src="/assets/images/common/shap.png"
                                alt=""
                              />
                            </div>
                            <div className="label">1ST Phase</div>
                          </div>
                          <div className="content">
                            <h5 className="heading">
                              <Link href="/project-details">
                                Angry Birds Friends
                              </Link>
                            </h5>
                            <p className="desc">
                              Ookeenga is the no.1 Vertical Multiplayer Real
                              Time Strategy Game with breathtaking 3D visuals...
                            </p>
                            <ul>
                              <li>
                                <p className="text">Min allocation</p>
                                <p className="price">0.01</p>
                              </li>
                              <li>
                                <p className="text">Maximum</p>
                                <p className="price">TBA</p>
                              </li>
                              <li>
                                <p className="text">Access</p>
                                <p className="price">Public</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-box-style4">
                          <div className="image">
                            <div className="img_inner">
                              <img
                                src="/assets/images/common/project_56.png"
                                alt=""
                              />
                              <img
                                className="shape"
                                src="/assets/images/common/shap.png"
                                alt=""
                              />
                            </div>
                            <div className="label">1ST Phase</div>
                          </div>
                          <div className="content">
                            <h5 className="heading">
                              <Link href="/project-details">
                                Zombie plant 2
                              </Link>
                            </h5>
                            <p className="desc">
                              Ookeenga is the no.1 Vertical Multiplayer Real
                              Time Strategy Game with breathtaking 3D visuals...
                            </p>
                            <ul>
                              <li>
                                <p className="text">Min allocation</p>
                                <p className="price">0.01</p>
                              </li>
                              <li>
                                <p className="text">Maximum</p>
                                <p className="price">TBA</p>
                              </li>
                              <li>
                                <p className="text">Access</p>
                                <p className="price">Public</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/*END Primary Market */}

                      {/* Secondary Market */}

                      <div
                        className="content-inner project-box-style6_wrapper"
                        style={{
                          display: `${activeIndex == 2 ? 'flex' : 'none'}`,
                        }}
                      >
                        <div className="col-md-12">
                          <Secondary />
                        </div>
                      </div>
                      {/* END Secondary Market */}

                      {/* For You */}
                      <div
                        className="content-inner project-box-style6_wrapper"
                        style={{
                          display: `${activeIndex == 3 ? 'flex' : 'none'}`,
                        }}
                      >
                        <div className="col-md-12">
                          <ForYou />
                        </div>
                      </div>
                      {/* END For You Market */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="tf-section tf_CTA">
            <div className="container relative">
              <div className="overlay"></div>
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="tf-title left mt66"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <h2 className="title">Launch on Risebot</h2>
                    <p className="sub">Full support in project incubation</p>
                    <div className="wrap-btn">
                      <Link
                        href="/submit-IGO-on-chain"
                        className="tf-button style3"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="image_cta"
                    data-aos="fade-left"
                    data-aos-duration={1200}
                  >
                    <img
                      className="move4"
                      src="/assets/images/common/img_cta_1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
