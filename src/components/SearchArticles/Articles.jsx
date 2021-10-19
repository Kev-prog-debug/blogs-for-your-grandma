import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Loading } from "react-loading-dot";
const Articles = ({ query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(query);

  useEffect(() => {
    fetchArticle();
  }, [title]);

  const fetchArticle = async () => {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
    );
    const data = await response.json();
    setArticles(data.articles);
    setLoading(false);
  };

  return (
    <div className="articles-container">
      {loading ? (
        <Loading />
      ) : (
        title &&
        articles.map((article) => {
          return (
            <Link
              to={{
                pathname: `/articles/${article.title}`,
                state: { ...article },
              }}
              key={v4()}
              className="articles-anchor"
            >
              <article className="articles">
                <h3 className="articles-title">{article.title}</h3>
                <img src={article.image} alt="image" className="articles-img" />
                <p className="articles-text">{article.description}</p>
                <h4 className="articles-source-name">{article.source.name}</h4>
              </article>
            </Link>
          );
        })
      )}
    </div>
  );
};
export default Articles;
