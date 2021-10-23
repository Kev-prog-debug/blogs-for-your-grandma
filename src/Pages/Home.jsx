import News from "../components/headlineNews/News";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { v4 } from "uuid";
import { Loading } from "react-loading-dot";
const Home = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en&max=20`
    );
    const data = await response.json();
    setNews(data.articles);
    // console.log(data);
    setLoading(false);
  };

  const location = useRouteMatch();
  console.log(location);
  return (
    <div className="headline-news-container">
      {loading ? (
        <Loading />
      ) : (
        news &&
        news.map((article) => {
          // console.log("article", article);
          return <News key={v4()} data={article} />;
        })
      )}
    </div>
  );
};
export default Home;
