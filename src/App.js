import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Articles from "./components/SearchArticles/Articles";
import WebsiteBanner from "./components/WebsiteBanner/WebsiteBanner";
import New from "./components/headlineNews/New";
const App = () => {
  return (
    <>
      <Navbar />
      <WebsiteBanner />
      <Switch>
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/" component={Home} />
        <Route exact path="/news/:newsTitle" component={New} />
      </Switch>
    </>
  );
};
export default App;
