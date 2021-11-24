import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Container, Article } from "../styles/Home.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../Redux/actions/fetchPosts";
const Entertainment = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchArticles("entertainment"));
  }, []);
  return (
    <Container>
      {state.loading ? (
        <Loading />
      ) : (
        state.posts &&
        state.posts.map((article) => {
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
};
export default Entertainment;
