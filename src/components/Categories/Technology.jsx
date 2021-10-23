import useFetch from "../../useFetch";
import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
import { Route, Link } from "react-router-dom";
import Article from "../SearchArticles/Article";
const Technology = () => {
  const [data, loading] = useFetch(
    `https://gnews.io/api/v4/search?q=technology&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
  );
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data &&
        data.articles.map((article) => {
          return (
            <Link
              to={{
                pathname: `/categories/art/${article.title}`,
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
      <div>
        <Route path="/art/:title" component={Article} />
      </div>
    </>
  );
};
export default Technology;
