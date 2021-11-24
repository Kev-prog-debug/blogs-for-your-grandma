import {
  PageTitle,
  Container,
  Article,
} from "../components/styles/Home.styled";
import { Loading } from "react-loading-dot";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBreakingNews } from "../Redux/actions/fetchPosts";
import { v4 } from "uuid";
const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchBreakingNews());
  }, []);
  return (
    <>
      <PageTitle>Breaking News</PageTitle>
      <Container>
        {state.loading ? (
          <Loading />
        ) : (
          state.breakingNews.map((article) => {
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
    </>
  );
};
export default Home;
