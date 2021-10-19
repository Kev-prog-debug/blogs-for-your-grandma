const New = (match) => {
  const data = match.location.state;
  return (
    <article className="news">
      <h1 className="news-title">{data.title}</h1>
      <h5 className="news-date">
        <em>{data.publishedAt}</em>
      </h5>
      <img src={data.image} className="news-img" alt="image" />
      <p className="news-text">{data.content}</p>
      <p className="news-url">
        Source:
        <a target="_blank" href={data.source.url}>
          {data.source.name}
        </a>
      </p>
    </article>
  );
};
export default New;
