import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
import { Route, Link } from "react-router-dom";
import { Container, Article } from "../styles/Home.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../Redux/actions/fetchPosts";
const Art = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchNews("art"));
  }, []);
  return (
    <>
      {state.loading ? (
        <Loading />
      ) : (
        state.posts &&
        state.posts.map((article) => {
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
        })
      )}
      <div>
        <Route path="/art/:title" component={Article} />
      </div>
    </>
  );
};
export default Art;
