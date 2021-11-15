import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Articles from "./components/SearchArticles/Articles";
import Technology from "./components/Categories/Technology";
import Art from "./components/Categories/Art";
import Entertainment from "./components/Categories/Entertainment";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";
import Details from "./Pages/Details";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/details/:Title" component={Details} />
        <Route exact path="/articles/technology" component={Technology} />
        <Route exact path="/articles/art" component={Art} />
        <Route exact path="/articles/entertainment" component={Entertainment} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
