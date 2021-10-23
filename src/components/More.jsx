import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const More = () => {
  const [input, setInput] = useState("");
  const history = useHistory();
  console.log();
  const handleSubmit = (e) => {
    e.preventDefault();
    //set input value to the state value in location object. So that we can use the input value later in the  'Articles 'component
    history.push(`/articles`, { query: input });
  };

  const link_styling = {
    textDecoration: "none",
    fontSize: "30px",
  };
  return (
    <div className="more">
      <form onSubmit={handleSubmit} className="searchbar">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="searchbar-input"
        />
        <button className="btn btn-secondary search-btn" type="submit">
          Search
        </button>
      </form>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to="/articles/technology" style={link_styling}>
          Technology
        </Link>
        <Link to="/articles/entertainment" style={link_styling}>
          Entertainment
        </Link>
        <Link to="/articles/Art" style={link_styling}>
          Art
        </Link>
      </div>
    </div>
  );
};
export default More;
