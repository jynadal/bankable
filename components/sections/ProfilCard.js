import React from 'react';
import avatarSVG from '@/public/assets/images/logoSvg/movie-ticket.svg';

const Card = () => {
  return (
    <article
      className="article"
      data-aos="fade-right"
      data-aos-duration={1200}
      data-aos-delay={200}
    >
      <div className="project_detail project-box-style5">
        <span className="boder" />
        <div className="img-box">
          <div className="image">
            <img
              className="mask"
              src="/assets/images/common/project_88.png"
              alt=""
            />
            <div className="shape">
              <img src="/assets/images/common/shape2.png" alt="" />
            </div>
          </div>
          <div className="content">
            <h5 className="heading">AntoninNelson</h5>
            <p className="desc">Spectateur</p>
          </div>
        </div>
        <div className="content-inner">
          <div className="content-progress-box style2">
            <p className="white mb-1">Streaming Space Available</p>
            <div className="progress-bar" data-percentage="60%">
              <p className="progress-title-holder">
                <span className="progress-number-wrapper">
                  <span className="progress-number-mark"></span>
                </span>
              </p>
              <div className="progress-content-outter">
                <div className="progress-content" />
              </div>
            </div>
            <p className="white flex">
              {' '}
              Storage
              <span>6 / 10</span>
            </p>
          </div>

          {/* <div className="boder-st mt0" /> */}
          <div className="bottom">
            {/*

            <p className="sub">We are preparing the sale</p>
            <div className="kyc">
              <div className="icon">
                <avatarSVG />
            
              </div>
              <p>Project My Profil from with PARAMS.</p>
            </div> */}

            <div className="boder-st" />
            <div className="total">
              <p className="active">Movies owned = 6 NFTs</p>
              <p>Off chain = 50 Films</p>
            </div>
            <div className="boder-st" />

            <p className="white flex">
              Movies Sold <span>25</span> <br />
              Friends 10 <br />
              Badges Level 1/10 <br />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
