import useFetch from "../../useFetch";
import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
import { Route, Link } from "react-router-dom";
import { Container, Article } from "../styles/Home.styled";
const Art = () => {
  const { data, loading } = useFetch(
    `https://gnews.io/api/v4/search?q=art&token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
  );
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        data &&
        data.articles.map((article) => {
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
                        pathname: `/details/${article.title}`,
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
        })
      )}
      <div>
        <Route path="/art/:title" component={Article} />
      </div>
    </>
  );
};
export default Art;
