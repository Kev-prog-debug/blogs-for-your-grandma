import News from "./News";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { Loading } from "react-loading-dot";
const FetchHeadlineNews = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
    );
    const data = await response.json();
    setArticles(data.articles);
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="headline-news-container">
      {loading ? (
        <Loading />
      ) : (
        articles &&
        articles.map((article) => {
          // console.log("article", article);
          return (
            <Link
              key={v4()}
              to={{ pathname: `/news/${article.title}`, state: { ...article } }}
              className="headline-news-anchor"
            >
              <News data={article} />
            </Link>
          );
        })
      )}
    </div>
  );
};
export default FetchHeadlineNews;
