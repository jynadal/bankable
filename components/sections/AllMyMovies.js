import Link from 'next/link';

export default function AllMyMovies() {
  const moviesItems = [
    {
      id: 1,
      img: '/assets/images/bankablePictures/OceansEleven1.png',
      title: "Ocean's 11",
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '01/05',
      //   link: '',
    },
    {
      id: 2,
      img: '/assets/images/bankablePictures/Titanic1.png',
      title: 'Titanic',
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '01/05',
      //   link: '',
    },
    {
      id: 3,
      img: '/assets/images/bankablePictures/OceansEleven2.png',
      title: "Ocean's 11",
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '03/05',
      //   link: '',
    },
    {
      id: 4,
      img: '/assets/images/bankablePictures/Titanic2.png',
      title: 'Titanic',
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '01/05',
      //   link: '',
    },
    {
      id: 1,
      img: '/assets/images/bankablePictures/OceansEleven1.png',
      title: "Ocean's 11",
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '01/05',
      //   link: '',
    },
    {
      id: 2,
      img: '/assets/images/bankablePictures/Titanic1.png',
      title: 'Titanic',
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '01/05',
      //   link: '',
    },
    {
      id: 3,
      img: '/assets/images/bankablePictures/OceansEleven2.png',
      title: "Ocean's 11",
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '03/05',
      //   link: '',
    },
    {
      id: 4,
      img: '/assets/images/bankablePictures/Titanic2.png',
      title: 'Titanic',
      dMovie: '',
      edition: 'Limited Edit.',
      rank: '01/05',
      //   link: '',
    },
  ];
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

            {/* Mapping Awesome Poster */}
            {moviesItems.map((item) => (
              <div
                key={item.id}
                className="col-lg-2 col-md-4"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <div className="image-box">
                  <div className="number">
                    <img src="/assets/images/backgroup/bg_box.png" alt="" />
                    <h6>Cars</h6>
                  </div>
                  <div className="image">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="content">
                    <h6 className="name">
                      <Link href="/project-details.">{item.title}</Link>
                    </h6>
                    <ul>
                      <li className="box">
                        <p>{item.edition}</p>
                        <p className="price">{item.rank}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="wrapper_button">
                    <Link
                      href={{
                        pathname: '/movie-detail',
                        query: { id: item?.id },
                      }}
                      className="tf-button style1"
                    >
                      <span>get started</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
