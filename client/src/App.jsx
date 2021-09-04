import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { css } from "@emotion/css";
import { axiosInstance } from "../src/config";
import { useState, useEffect } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
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
      console.log(res.date);
    };
    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <div className={app}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home posts={posts} />
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
