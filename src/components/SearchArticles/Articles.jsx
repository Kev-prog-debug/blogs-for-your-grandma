import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Loading } from "react-loading-dot";
import { useLocation } from "react-router-dom";
import useFetch from "../../useFetch";
const Articles = () => {
  //useLocation is used to get the data sent from the More component
  const location = useLocation();
  const query = location.state.query;

  const [data, loading] = useFetch(
    `https://gnews.io/api/v4/search?q=${query}&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
  );

  return (
    <div className="articles-container">
      {loading ? (
        <Loading />
      ) : (
        data &&
        data.articles.map((article) => {
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
                <img src={article.image} alt="" className="articles-img" />
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
