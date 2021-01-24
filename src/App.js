import "./App.css";
import NavbarComponent from "./components/layout/NavbarComponent";
import FooterComponent from "./components/layout/FooterComponent";
import HomeComponent from "./pages/HomeComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutComponent from "./pages/AboutComponent";
import BlogComponent from "./pages/BlogComponent";
import DetailBlogComponent from "./pages/DetailBlogComponent";
import CreateBlogComponent from "./pages/CreateBlogComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/about" exact>
            <AboutComponent />
          </Route>
          <Route path="/blog" exact>
            <BlogComponent />
          </Route>
          <Route path="/blog/create" exact>
            <CreateBlogComponent />
          </Route>
          <Route path="/blog/:id" exact>
            <DetailBlogComponent />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
