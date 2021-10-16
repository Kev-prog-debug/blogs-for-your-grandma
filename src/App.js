import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
