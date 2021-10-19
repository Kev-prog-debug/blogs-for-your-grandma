import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/headlineNews/News";
import FetchHeadlineNews from "./components/headlineNews/FetchHeadlineNews";
import New from "./components/headlineNews/New";
import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Article from "./components/SearchArticles/Article";
import Articles from "./components/SearchArticles/Articles";
import WebsiteBanner from "./components/WebsiteBanner/WebsiteBanner";
const App = () => {
  const [query, setQuery] = useState(null);

  const getInput = (input) => {
    setQuery(input);
  };

  return (
    <BrowserRouter>
      <Navbar getInput={getInput} />
      <WebsiteBanner />
      <Switch>
        <Route
          exact
          path="/articles"
          component={() => <Articles query={query} />}
        />
        <Route exact path="/articles/:id" component={Article} />
        <Route exact path="/" component={FetchHeadlineNews} />
        <Route exact path="/news/:id" component={New} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
