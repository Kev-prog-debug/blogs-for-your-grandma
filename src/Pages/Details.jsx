import {
  Container,
  Article,
  Title,
  PublishedDate,
  Content,
  Source,
} from "../components/styles/Details.styled";
import { useLocation } from "react-router";
const Details = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <Container>
      <Article>
        <Title>{data.title}</Title>
        <PublishedDate>{data.publishedAt}</PublishedDate>
        <img src={data.image} alt="" />
        <Content>{data.content}</Content>
        <Source>
          Source : <a href={data.source.url}>{data.source.name}</a>
        </Source>
      </Article>
    </Container>
  );
};
export default Details;
