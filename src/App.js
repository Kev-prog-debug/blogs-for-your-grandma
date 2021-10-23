import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Articles from "./components/SearchArticles/Articles";
import New from "./components/headlineNews/New";
import Technology from "./components/Categories/Technology";
import Art from "./components/Categories/Art";
import Entertainment from "./components/Categories/Entertainment";
import Article from "./components/SearchArticles/Article";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/" component={Home} />
        <Route exact path="/news/:newsTitle" component={New} />
        <Route exact path="/articles/technology" component={Technology} />
        <Route exact path="/articles/art" component={Art} />
        <Route exact path="/articles/entertainment" component={Entertainment} />
        <Route path="/categories/:category/:title" component={Article} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
