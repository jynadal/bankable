import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Articles } from '@/components/sections/Articles';
//import data from '../data/blogArticles';

const getArticlesData = async () => {
  const res = await fetch('https://jsonserver.reactbd.com/amazonpro');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export default async function BlogGrid() {
  const articles = await getArticlesData();
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid">
        <div>
          <section className="tf-section tf-blog pt60">
            <div className="container">
              <div className="row">
                <Articles articles={articles} />

                <div className="col-lg-4 col-md-12">
                  <div className="grid-box">
                    <div className="image">
                      <img src="/assets/images/post/post_1.jpg" alt="" />
                    </div>
                    <div className="content">
                      <Link href="/blog-details" className="tag">
                        Metaverse
                      </Link>
                      <h5 className="title">
                        <Link href="/blog-details">
                          Decoded: Metaverse and the future of banking
                        </Link>
                      </h5>
                      <p>
                        The metaverse can help the healthcare fraternity by
                        providing trainings on understanding medical tools
                        and...
                      </p>
                    </div>
                    <Link href="/blog-details" className="tf-button style1">
                      Read more
                    </Link>
                  </div>
                </div>

                <div className="col-md-12">
                  <ul
                    className="panigation"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <li>
                      <Link href="#">
                        <svg
                          width={8}
                          height={12}
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.5 1L1.5 6L6.5 11"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="active">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link href="#">2</Link>
                    </li>
                    <li>
                      <Link href="#">3</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <svg
                          width={8}
                          height={12}
                          viewBox="0 0 8 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.5 1L6.5 6L1.5 11"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
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
        </div>
      </Layout>
    </>
  );
}
