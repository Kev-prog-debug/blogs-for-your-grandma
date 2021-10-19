import { useHistory, useLocation, useParams } from "react-router-dom";
const Article = (match) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const data = location.state;
  console.log({ history, location, params });
  // console.log(match);
  return (
    <article className="searched-article">
      <h1 className="article-title">{data.title}</h1>
      <h5 className="article-date">
        <em>{data.publishedAt}</em>
      </h5>
      <img src={data.image} alt="image" className="article-img" />
      <p className="article-text">{data.content}</p>
      <p className="article-source">
        Source:
        <a target="_blank" href={data.source.url} className="article-url">
          {data.source.name}
        </a>
      </p>
    </article>
  );
};
export default Article;
// Title - Title for the news
// Description - Good for use in the previews page

// Content - real content
// Url - url to the website
// Image - image for the news
// publishedAt - published time
// Sources.name - the website name
// sources.url - url to the website
