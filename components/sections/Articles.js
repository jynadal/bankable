'use client side';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div key={article._id} className="col-lg-4 col-md-12">
          <div className="grid-box">
            <div className="image">
              <Image src={article.image} width={300} height={200} alt="" />
            </div>
            <div className="content">
              <Link href={article.category} className="tag">
                {article.category}
              </Link>
              <h5 className="title">
                <Link href={article.title}>{article.title}</Link>
              </h5>
              <p>
                {article.description.length > 100
                  ? `${article.description.substring(0, 100)}...`
                  : article.description}
              </p>
            </div>
            <Link
              href={{ pathname: '/blog-details', query: { _id: article?._id } }}
              className="tf-button style1"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
