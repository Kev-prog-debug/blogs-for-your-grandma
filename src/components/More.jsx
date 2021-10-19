import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
const More = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(input);
    //set input value to the state value in location object. So that we can use the input value later in the  'Articles 'component
    history.push(`/articles`, { query: input });
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
    </div>
  );
};
export default More;
