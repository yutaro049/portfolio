import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { css } from "@emotion/css";
import { axiosInstance } from "../config";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  const [posts, setPosts] = useState([]);

  const app = css`
    max-width: 1000px;
    margin: 0 auto;
  `;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

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
            <Skills posts={posts} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
