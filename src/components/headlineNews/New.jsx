import { useLocation } from "react-router-dom";
const New = () => {
  const { state } = useLocation();
  return (
    <article className="news">
      <h1 className="news-title">{state.title}</h1>
      <h5 className="news-date">
        <em>{state.publishedAt}</em>
      </h5>
      <img src={state.image} className="news-img" alt="image" />
      <p className="news-text">{state.content}</p>
      <p className="news-url">
        Source:
        <a target="_blank" href={state.source.url}>
          {state.source.name}
        </a>
      </p>
    </article>
  );
};
export default New;
