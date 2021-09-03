import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { css } from "@emotion/css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  const app = css`
    max-width: 1000px;
    margin: 0 auto;
  `;

  return (
    <BrowserRouter>
      <div className={app}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
