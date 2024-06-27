import Layout from '@/components/layout/Layout';
import Card from '@/components/sections/ProfilCard';
import Link from 'next/link';

export default function MyProfil({ params }) {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbTitle={`${params.projectId} detail`}
      >
        <div>
          <section className="tf-section details">
            <div className="container">
              <div className="row">
                <Card />

                <div
                  className="sidebar"
                  data-aos="fade-left"
                  data-aos-duration={1200}
                  data-aos-delay={200}
                >
                  <div className="prodect-content">
                    <h4 className="heading mb10">About Project</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In a magna ipsum. Phasellus dignissim odio eget turpis
                      scelerisque imperdiet. Praesent sit amet maximus nunc.
                      Donec ornare mauris odio, sit amet vestibulum lectus
                      elementum vitae. Nulla eget fermentum dolor. Sed quis ante
                      iaculis, consequat odio eget.
                    </p>
                    <div className="spacing" />
                    <ul className="social justify-content-start mb30">
                      <li>
                        <Link href="#">
                          <svg
                            width={22}
                            height={18}
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 2.17863C21.1819 2.5375 20.3101 2.77537 19.4012 2.89087C20.3362 2.33262 21.0499 1.45537 21.3854 0.398C20.5136 0.91775 19.5511 1.28488 18.5254 1.48975C17.6976 0.608375 16.5179 0.0625 15.2309 0.0625C12.7339 0.0625 10.7236 2.08925 10.7236 4.57388C10.7236 4.93138 10.7539 5.27512 10.8281 5.60237C7.0785 5.4195 3.76063 3.62238 1.53175 0.88475C1.14262 1.55988 0.914375 2.33263 0.914375 3.1645C0.914375 4.7265 1.71875 6.11112 2.91775 6.91275C2.19312 6.899 1.48225 6.68863 0.88 6.35725C0.88 6.371 0.88 6.38887 0.88 6.40675C0.88 8.5985 2.44337 10.419 4.4935 10.8384C4.12637 10.9387 3.72625 10.9869 3.311 10.9869C3.02225 10.9869 2.73075 10.9704 2.45712 10.9099C3.0415 12.696 4.69975 14.0091 6.6715 14.0517C5.137 15.2521 3.18863 15.9754 1.07938 15.9754C0.7095 15.9754 0.35475 15.9589 0 15.9135C1.99787 17.2019 4.36563 17.9375 6.919 17.9375C15.2185 17.9375 19.756 11.0625 19.756 5.10325C19.756 4.90387 19.7491 4.71138 19.7395 4.52025C20.6346 3.885 21.3867 3.09163 22 2.17863Z"
                              fill="#798DA3"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1208_207)">
                              <path
                                d="M21.3127 0H16.173L8.5376 13.3746L13.4573 22H18.5971L13.6773 13.3746L21.3127 0Z"
                                fill="#798DA3"
                              />
                              <path
                                d="M6.41162 4.125H1.56613L4.36975 9.06262L0.6875 15.125H5.533L9.21525 9.06262L6.41162 4.125Z"
                                fill="#798DA3"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1208_207">
                                <rect width={22} height={22} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1208_217)">
                              <path
                                d="M11 1.46655C8.16933 1.46655 5.86667 3.76922 5.86667 6.59989V15.3999C5.86667 15.8032 5.53813 16.1332 5.13333 16.1332C4.72853 16.1332 4.4 15.8032 4.4 15.3999V11.7332H0V15.3999C0 18.2306 2.30267 20.5332 5.13333 20.5332C7.964 20.5332 10.2667 18.2306 10.2667 15.3999V6.59989C10.2667 6.19509 10.5952 5.86655 11 5.86655C11.4048 5.86655 11.7333 6.19509 11.7333 6.59989V9.38509L13.9333 10.8518L16.1333 9.38509V6.59989C16.1333 3.76922 13.8307 1.46655 11 1.46655Z"
                                fill="#798DA3"
                              />
                              <path
                                d="M17.6001 11.7331V15.3998C17.6001 15.8031 17.2701 16.1331 16.8667 16.1331C16.4634 16.1331 16.1334 15.8031 16.1334 15.3998V11.1479L14.3397 12.3433C14.2165 12.4254 14.0757 12.4665 13.9334 12.4665C13.7911 12.4665 13.6503 12.4254 13.5271 12.3433L11.7334 11.1479V15.3998C11.7334 18.2305 14.0361 20.5331 16.8667 20.5331C19.6974 20.5331 22.0001 18.2305 22.0001 15.3998V11.7331H17.6001Z"
                                fill="#798DA3"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1208_217">
                                <rect width={22} height={22} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.913 6.12039C13.913 4.56668 14.5094 3.75813 15.3516 3.75813C16.1537 3.75813 16.688 4.48388 16.688 5.95479C16.688 6.79181 16.4654 7.70902 16.3011 8.25108C16.3024 8.25237 17.1006 9.65601 19.2844 9.22522C19.7475 8.18769 19.9998 6.84355 19.9998 5.66501C19.9998 2.4942 18.3956 0.649414 15.4564 0.649414C12.433 0.649414 10.6659 2.99227 10.6659 6.08028C10.6659 9.13983 12.085 11.7673 14.424 12.964C13.4408 14.9472 12.1885 16.6949 10.8832 18.0119C8.51578 15.1244 6.37474 11.2744 5.49503 3.75942H1.99951C3.61402 16.2758 8.42522 20.2603 9.69691 21.0262C10.4162 21.4621 11.0372 21.4414 11.6943 21.0676C12.7267 20.4751 15.8289 17.3495 17.547 13.6871C18.2675 13.6845 19.1343 13.6017 19.9985 13.4038V10.9393C19.4694 11.0622 18.9584 11.1166 18.4978 11.1166C15.9066 11.1166 13.913 9.29249 13.913 6.12039Z"
                              fill="#798DA3"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            width={22}
                            height={14}
                            viewBox="0 0 22 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.6065 5.76663C18.4126 5.702 18.2256 5.64012 18.0469 5.581C16.6774 5.13412 15.8524 4.86325 15.8524 3.75637C15.8524 2.8585 16.5193 2.20812 17.4378 2.20812C18.1418 2.20812 18.667 2.512 19.1373 3.19675C19.1813 3.26 19.2651 3.28337 19.3325 3.24625L20.7144 2.51337C20.7515 2.49412 20.7804 2.45975 20.7914 2.41712C20.8024 2.3745 20.7983 2.3305 20.779 2.292C20.0379 0.92525 18.9709 0.261125 17.5147 0.261125C15.2996 0.261125 13.8669 1.654 13.8669 3.80862C13.8669 6.01137 15.2529 6.90375 17.8076 7.77687C19.2871 8.28975 19.943 8.56062 19.943 9.65512C19.943 10.8857 18.8746 11.7699 17.4171 11.7176C15.8895 11.664 15.4275 10.8239 14.8459 9.44613C13.8614 7.11275 12.7407 4.39025 12.7311 4.36413C11.6077 1.66913 9.37887 0.125 6.6165 0.125C2.96862 0.125 0 3.20913 0 7.00138C0 10.7909 2.96862 13.875 6.6165 13.875C8.60612 13.875 10.472 12.9592 11.7343 11.3601C11.77 11.3134 11.7796 11.2501 11.7563 11.1951L10.923 9.19588C10.8996 9.14088 10.846 9.10238 10.7869 9.09963C10.7264 9.09688 10.6728 9.13125 10.6453 9.18487C9.85738 10.7482 8.31325 11.719 6.6165 11.719C4.11262 11.719 2.07625 9.60288 2.07625 7C2.07625 4.39712 4.11262 2.281 6.6165 2.281C8.43975 2.281 10.109 3.40437 10.7731 5.08188L12.837 9.97L13.0749 10.5186C14.0071 12.775 15.378 13.787 17.5244 13.7953C20.0764 13.7953 22 12.038 22 9.70875C22 7.37263 20.7556 6.49538 18.6065 5.76663Z"
                              fill="#798DA3"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11 0C4.93457 0 0 4.93457 0 11C0 17.0654 4.93457 22 11 22C17.0654 22 22 17.0654 22 11C22 4.93457 17.0654 0 11 0ZM1.375 11C1.37461 10.1454 1.48831 9.29453 1.71308 8.47H5.13275C4.92335 10.1502 4.92335 11.8498 5.13275 13.53H1.71308C1.48831 12.7055 1.37461 11.8546 1.375 11ZM6.35078 11C6.34995 10.1539 6.40605 9.30861 6.5187 8.47H10.3125V13.53H6.51862C6.40599 12.6914 6.34992 11.8461 6.35078 11ZM11.6875 1.49205C12.5891 1.79592 13.4634 2.6834 14.1601 4.02974C14.6231 4.92439 14.9854 5.96333 15.2369 7.095H11.6875V1.49205ZM10.3125 1.49205V7.09517H6.76328C7.01478 5.96355 7.37713 4.92456 7.84012 4.02991C8.53664 2.6834 9.41089 1.79609 10.3125 1.49205ZM10.3125 14.905V20.5081C9.41089 20.2043 8.53664 19.3168 7.83991 17.9704C7.37692 17.0758 7.01456 16.0368 6.76307 14.9052L10.3125 14.905ZM11.6875 20.5081V14.905H15.2369C14.9854 16.0366 14.6231 17.0756 14.1601 17.9703C13.4634 19.3166 12.5891 20.2039 11.6875 20.508V20.5081ZM11.6875 13.53V8.47H15.4814C15.594 9.30861 15.6501 10.1539 15.6492 11C15.6501 11.8461 15.594 12.6914 15.4813 13.53H11.6875ZM16.8673 8.47H20.2869C20.7377 10.1265 20.7377 11.8735 20.2869 13.53H16.8673C16.9724 12.6908 17.0248 11.8458 17.0242 11C17.0248 10.1542 16.9724 9.30923 16.8673 8.47ZM19.7964 7.095H16.6418C16.3635 5.73053 15.9384 4.47391 15.3814 3.3978C15.1393 2.92471 14.857 2.47331 14.5375 2.04858C16.881 2.98141 18.7678 4.79201 19.7964 7.095ZM7.46268 2.04841C7.14323 2.47313 6.86087 2.92453 6.61873 3.39762C6.06182 4.47378 5.63664 5.73036 5.35838 7.09483H2.20357C3.23225 4.79179 5.11917 2.98119 7.46268 2.04841ZM2.20357 14.905H5.3582C5.63647 16.2695 6.06164 17.5261 6.61856 18.6022C6.8607 19.0753 7.14305 19.5267 7.46251 19.9514C5.11906 19.0186 3.23221 17.208 2.20357 14.905ZM14.5374 19.9516C14.8568 19.5269 15.1391 19.0755 15.3813 18.6024C15.9382 17.5262 16.3634 16.2696 16.6416 14.9052H19.7964C18.7678 17.2082 16.8809 19.0188 14.5374 19.9516Z"
                              fill="#798DA3"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                    <div className="image mb30">
                      <img
                        className="boder-20"
                        src="/assets/images/common/details_1.jpg"
                        alt=""
                      />
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
                    className="tf-title left mt56"
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
                      src="/assets/images/common/img_cta.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tf-section project_2">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="tf-title left mb40"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <h2 className="title">Ended iGOs</h2>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="project-box-style3_wrapper">
                    <div
                      className="project-box-style3"
                      data-aos="fade-in"
                      data-aos-duration={800}
                    >
                      <div className="header_project">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/project_8.png"
                            alt=""
                          />
                          <div className="shape">
                            <img
                              src="/assets/images/common/shape_2.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <h5 className="heading">
                          AFK summoner fantasy hero war
                        </h5>
                      </div>
                      <div className="content">
                        <div className="td td1">
                          <p>Min allocation</p>
                          <p>0.01</p>
                        </div>
                        <div className="td td2">
                          <p>Maximum</p>
                          <p>TBA</p>
                        </div>
                        <div className="td td3">
                          <p>Access</p>
                          <p>Public</p>
                        </div>
                        <div className="td td4">
                          <p>Chain</p>
                          <p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width={24}
                                height={24}
                                rx={12}
                                fill="#414B57"
                              />
                              <path
                                d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z"
                                fill="white"
                              />
                              <path
                                d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z"
                                fill="white"
                              />
                              <path
                                d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z"
                                fill="white"
                              />
                              <path
                                d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z"
                                fill="white"
                              />
                              <path
                                d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z"
                                fill="white"
                              />
                              <path
                                d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z"
                                fill="white"
                              />
                            </svg>
                          </p>
                        </div>
                        <div className="td td5">
                          <p>Target raise</p>
                          <p>900,000</p>
                        </div>
                        <div className="td td6">
                          <p>Progress</p>
                          <div>
                            <div className="content-progress-box style2">
                              <div
                                className="progress-bar"
                                data-percentage="99%"
                              >
                                <p className="progress-title-holder">
                                  <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                      <span className="percent" />
                                    </span>
                                  </span>
                                </p>
                                <div className="progress-content-outter">
                                  <div className="progress-content" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="project-box-style3"
                      data-aos="fade-in"
                      data-aos-duration={800}
                    >
                      <div className="header_project">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/project_8.png"
                            alt=""
                          />
                          <div className="shape">
                            <img
                              src="/assets/images/common/shape_2.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <h5 className="heading">
                          AFK summoner fantasy hero war
                        </h5>
                      </div>
                      <div className="content">
                        <div className="td td1">
                          <p>Min allocation</p>
                          <p>0.01</p>
                        </div>
                        <div className="td td2">
                          <p>Maximum</p>
                          <p>TBA</p>
                        </div>
                        <div className="td td3">
                          <p>Access</p>
                          <p>Public</p>
                        </div>
                        <div className="td td4">
                          <p>Chain</p>
                          <p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width={24}
                                height={24}
                                rx={12}
                                fill="#414B57"
                              />
                              <path
                                d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z"
                                fill="white"
                              />
                              <path
                                d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z"
                                fill="white"
                              />
                              <path
                                d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z"
                                fill="white"
                              />
                              <path
                                d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z"
                                fill="white"
                              />
                              <path
                                d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z"
                                fill="white"
                              />
                              <path
                                d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z"
                                fill="white"
                              />
                            </svg>
                          </p>
                        </div>
                        <div className="td td5">
                          <p>Target raise</p>
                          <p>900,000</p>
                        </div>
                        <div className="td td6">
                          <p>Progress</p>
                          <div>
                            <div className="content-progress-box style2">
                              <div
                                className="progress-bar"
                                data-percentage="99%"
                              >
                                <p className="progress-title-holder">
                                  <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                      <span className="percent" />
                                    </span>
                                  </span>
                                </p>
                                <div className="progress-content-outter">
                                  <div className="progress-content" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="project-box-style3"
                      data-aos="fade-in"
                      data-aos-duration={800}
                    >
                      <div className="header_project">
                        <div className="image">
                          <img
                            className="mask"
                            src="/assets/images/common/project_8.png"
                            alt=""
                          />
                          <div className="shape">
                            <img
                              src="/assets/images/common/shape_2.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <h5 className="heading">
                          AFK summoner fantasy hero war
                        </h5>
                      </div>
                      <div className="content">
                        <div className="td td1">
                          <p>Min allocation</p>
                          <p>0.01</p>
                        </div>
                        <div className="td td2">
                          <p>Maximum</p>
                          <p>TBA</p>
                        </div>
                        <div className="td td3">
                          <p>Access</p>
                          <p>Public</p>
                        </div>
                        <div className="td td4">
                          <p>Chain</p>
                          <p>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width={24}
                                height={24}
                                rx={12}
                                fill="#414B57"
                              />
                              <path
                                d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z"
                                fill="white"
                              />
                              <path
                                d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z"
                                fill="white"
                              />
                              <path
                                d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z"
                                fill="white"
                              />
                              <path
                                d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z"
                                fill="white"
                              />
                              <path
                                d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z"
                                fill="white"
                              />
                              <path
                                d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z"
                                fill="white"
                              />
                            </svg>
                          </p>
                        </div>
                        <div className="td td5">
                          <p>Target raise</p>
                          <p>900,000</p>
                        </div>
                        <div className="td td6">
                          <p>Progress</p>
                          <div>
                            <div className="content-progress-box style2">
                              <div
                                className="progress-bar"
                                data-percentage="99%"
                              >
                                <p className="progress-title-holder">
                                  <span className="progress-number-wrapper">
                                    <span className="progress-number-mark">
                                      <span className="percent" />
                                    </span>
                                  </span>
                                </p>
                                <div className="progress-content-outter">
                                  <div className="progress-content" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
