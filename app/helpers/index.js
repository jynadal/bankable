const getArticlesData = async () => {
  const res = await fetch('https://jsonserver.reactbd.com/amazonpro');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const getSingleArticle = async (_id) => {
  const item = await getArticlesData();
  const singleArticle = await item.find((product) => product._id === _id);
  return {
    props: { singleArticle },
  };
};

const getMoviesData = async () => {
  const res = await fetch('https://jsonserver.reactbd.com/amazonpro');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const getSingleMovie = async (_id) => {
  const item = await getMoviesData();
  const singleMovie = await item.find((product) => product._id === _id);
  return {
    props: {singleMovie },
  };
};

