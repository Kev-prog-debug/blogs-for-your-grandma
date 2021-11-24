import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Loading } from "react-loading-dot";
import { useLocation } from "react-router-dom";
import { Article, Container } from "../styles/Home.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../Redux/actions/fetchPosts";
const Articles = () => {
  //useLocation is used to get the data sent from the More component
  const location = useLocation();
  const query = location.state.query;
  console.log(query);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchNews(query));
  }, [query]);

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
export default Articles;
