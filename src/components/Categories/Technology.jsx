import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Container, Article } from "../styles/Home.styled";
import { useEffect } from "react";
import { fetchArticles } from "../../Redux/actions/fetchPosts";
import { useDispatch, useSelector } from "react-redux";

const Technology = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchArticles("technology"));
  }, []);
  return (
    <Container>
      {state.loading ? (
        <Loading />
      ) : (
        state &&
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
export default Technology;
