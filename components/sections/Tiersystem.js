import Link from 'next/link';

export default function Tiersystem() {
  return (
    <>
      <section className="tf-section tier_system">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div
                className="tf-title"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <h2 className="title mb20">Some of our awesome dMovies</h2>
              </div>
            </div>

            {/* First Awesome Poster */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="image-box">
                <div className="number">
                  <img src="/assets/images/backgroup/bg_box.png" alt="" />
                  <h6>Cars</h6>
                </div>
                <div className="image">
                  <img src="/assets/images/common/project_17.png" alt="" />
                </div>
                <div className="content">
                  <h6 className="name">
                    <Link href="/project-details.">Limited Edit.</Link>
                  </h6>
                  <ul>
                    {/* <li className="box bg_style">
                      <p>Staking Requirements</p>
                      <p className="price">$9,000</p>
                    </li> */}
                    {/* <li className="box">
                      <p>Allocation</p>
                      <p className="price">Lottery(20%)</p>
                    </li>
                    <li className="box bg_style">
                      <p>Requirements</p>
                      <p className="price">Whitelist task</p>
                    </li> */}
                    <li className="box">
                      <p>Rank Collection</p>
                      <p className="price">01/05</p>
                    </li>
                  </ul>
                </div>
                <div className="wrapper_button">
                  <Link href="/project-details." className="tf-button style1">
                    <span>get started</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Awesome Poster */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="image-box">
                <div className="number">
                  <img src="/assets/images/backgroup/bg_box.png" alt="" />
                  <h6>Ocean's 11</h6>
                </div>
                <div className="image">
                  <img src="/assets/images/common/project_17.png" alt="" />
                </div>
                <div className="content">
                  <h6 className="name">
                    <Link href="/project-details.">Limited Edit.</Link>
                  </h6>
                  <ul>
                    {/* <li className="box bg_style">
                      <p>Staking Requirements</p>
                      <p className="price">$9,000</p>
                    </li> */}
                    {/* <li className="box">
                      <p>Allocation</p>
                      <p className="price">Lottery(20%)</p>
                    </li>
                    <li className="box bg_style">
                      <p>Requirements</p>
                      <p className="price">Whitelist task</p>
                    </li> */}
                    <li className="box">
                      <p>Rank Collection</p>
                      <p className="price">01/20</p>
                    </li>
                  </ul>
                </div>
                <div className="wrapper_button">
                  <Link href="/project-details." className="tf-button style1">
                    <span>get started</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Awesome Poster */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="image-box">
                <div className="number">
                  <img src="/assets/images/backgroup/bg_box.png" alt="" />
                  <h6>Titanic</h6>
                </div>
                <div className="image">
                  <img src="/assets/images/common/project_17.png" alt="" />
                </div>
                <div className="content">
                  <h6 className="name">
                    <Link href="/project-details.">Limited Edit.</Link>
                  </h6>
                  <ul>
                    {/* <li className="box bg_style">
                      <p>Staking Requirements</p>
                      <p className="price">$9,000</p>
                    </li> */}
                    {/* <li className="box">
                      <p>Allocation</p>
                      <p className="price">Lottery(20%)</p>
                    </li>
                    <li className="box bg_style">
                      <p>Requirements</p>
                      <p className="price">Whitelist task</p>
                    </li> */}
                    <li className="box">
                      <p>Rank Collection</p>
                      <p className="price">03/20</p>
                    </li>
                  </ul>
                </div>
                <div className="wrapper_button">
                  <Link href="/project-details." className="tf-button style1">
                    <span>get started</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Fourth Awesome Poster */}
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="image-box">
                <div className="number">
                  <img src="/assets/images/backgroup/bg_box.png" alt="" />
                  <h6>Men In Black</h6>
                </div>
                <div className="image">
                  <img src="/assets/images/common/project_17.png" alt="" />
                </div>
                <div className="content">
                  <h6 className="name">
                    <Link href="/project-details.">Limited Edit.</Link>
                  </h6>
                  <ul>
                    {/* <li className="box bg_style">
                      <p>Staking Requirements</p>
                      <p className="price">$9,000</p>
                    </li> */}
                    {/* <li className="box">
                      <p>Allocation</p>
                      <p className="price">Lottery(20%)</p>
                    </li>
                    <li className="box bg_style">
                      <p>Requirements</p>
                      <p className="price">Whitelist task</p>
                    </li> */}
                    <li className="box">
                      <p>Rank Collection</p>
                      <p className="price">02/50</p>
                    </li>
                  </ul>
                </div>
                <div className="wrapper_button">
                  <Link href="/project-details." className="tf-button style1">
                    <span>get started</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* END Fourth Awesome Poster */}

            {/* <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="image-box">
                <div className="number">
                  <img src="/assets/images/backgroup/bg_box.png" alt="" />
                  <h6>Tiers #2</h6>
                </div>
                <div className="image">
                  <img src="/assets/images/common/project_18.png" alt="" />
                </div>
                <div className="content">
                  <h6 className="name">
                    <Link href="/project-details.">Medium</Link>
                  </h6>
                  <ul>
                    <li className="box bg_style">
                      <p>Staking Requirements</p>
                      <p className="price">$20,000</p>
                    </li>
                    <li className="box">
                      <p>Allocation</p>
                      <p className="price">Lottery(50%)</p>
                    </li>
                    <li className="box bg_style">
                      <p>Requirements</p>
                      <p className="price">Whitelist task</p>
                    </li>
                    <li className="box">
                      <p>Pool weight</p>
                      <p className="price">07</p>
                    </li>
                  </ul>
                </div>
                <div className="wrapper_button">
                  <Link
                    href="/project-details."
                    className="tf-button style1"
                  >
                    <span>get started</span>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
