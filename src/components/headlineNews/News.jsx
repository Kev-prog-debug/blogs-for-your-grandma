import { Link, Route } from "react-router-dom";
import New from "./New";
const News = ({ data }) => {
  return (
    <div className="headline-news-anchor">
      <Link to={{ pathname: `/news/${data.title}`, state: { ...data } }}>
        <article className="headline-news">
          <h3 className="headline-title">{data.title}</h3>
          <img src={data.image} alt="image" className="headline-img" />
          <p className="headline-text">{data.description}</p>
          <h5 className="headline-source-name">{data.source.name}</h5>
        </article>
      </Link>
    </div>
  );
};
export default News;
// Title - Title for the news
// Description - Good for use in the previews page
// Content - real content
// Url - url to the website
// Image - image for the news
// publishedAt - published time
// Sources.name - the website name
// sources.url - url to the website
