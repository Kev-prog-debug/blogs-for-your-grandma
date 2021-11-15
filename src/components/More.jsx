import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Form, Categories, Input } from "./styles/More.styled";
const More = () => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    //set input value to the state value in location object. So that we can use the input value later in the  'Articles 'component
    history.push(`/articles`, { query: input });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="more-search">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="searchbar-input"
        />
        <button className="btn btn-secondary search-btn" type="submit">
          Search
        </button>
      </Form>
      <Categories>
        <Link to="/articles/technology">Technology</Link>
        <Link to="/articles/entertainment">Entertainment</Link>
        <Link to="/articles/Art">Art</Link>
      </Categories>
    </Container>
  );
};
export default More;
