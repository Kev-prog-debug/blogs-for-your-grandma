import {
  PageTitle,
  Container,
  ArticlesContainer,
  Article,
} from "../components/styles/Home.styled";
import { Loading } from "react-loading-dot";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
const Home = () => {
  const { data, loading } = useFetch(
    `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
  );
  return (
    <>
      <PageTitle>Breaking News</PageTitle>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          data.articles.map((article) => {
            return (
              <Link
                to={{
                  pathname: `/details/${article.title}`,
                  state: { ...article },
                }}
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
    </>
  );
};
export default Home;
