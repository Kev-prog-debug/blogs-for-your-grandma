import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Loading } from "react-loading-dot";
import { useLocation } from "react-router-dom";
import useFetch from "../../useFetch";
import { Article, Container } from "../styles/Home.styled";
const Articles = () => {
  //useLocation is used to get the data sent from the More component
  const location = useLocation();
  const query = location.state.query;

  const { data, loading } = useFetch(
    `https://gnews.io/api/v4/search?q=${query}&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
  );

  return (
    <Container>
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
            >
              <Article>
                <h3>{article.title}</h3>
                <img src={article.image} alt="" />
                <h4>{article.source.name}</h4>
              </Article>
            </Link>
          );
        })
      )}
    </Container>
  );
};
export default Articles;
