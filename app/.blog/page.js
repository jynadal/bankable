import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Articles } from '@/components/sections/Articles';
//import data from '../data/blogArticles';

import { getLocalData } from '../data/apiFetch';

// import useSWR from 'swr';

// Write a fetcher function to wrap the native fetch function and return the result of a call to the URL in JSON format
const fetcher = (url) => fetch(url).then((res) => res.json());

const getArticlesData = async () => {
  const res = await fetch('https://jsonserver.reactbd.com/amazonpro');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/articles');
//   const articles = await res.json();
//   //const localData = await getLocalData();
//   return {
//     props: { articles },
//   };
// }

export default async function BlogGrid() {
  // Set up SWR to run the fetcher function when calling "/api/staticdata"
  // There are 3 possible states: (1) "loading" when data is null (2) "ready" when the data is returned (3) "error" when there was an error fetching the data

  //   const { articles, error } = useSWR(
  //     'http://localhost:3000/app/data/apiFetch/staticdata',
  //     fetcher
  //   );

  //   // Handle the error state
  //   if (error) return <div>Failed to load</div>;
  //   // Handle the loading state
  //   if (!articles) return <div>Loading...</div>;
  //   // Handle the ready state and display the result contained in the data object

  const articles = await getArticlesData();
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid">
        <div>
          <section className="tf-section tf-blog pt60">
            <div className="container">
              <div className="row">
                <Articles articles={articles} />
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
