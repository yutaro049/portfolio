import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { css } from "@emotion/css";
import { axiosInstance } from "../src/config";
import { useState, useEffect } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const [posts, setPosts] = useState([]);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const app = css`
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
        <Header isMobile={isMobile} />
        <Switch>
          <Route exact path="/">
            <Home posts={posts} isMobile={isMobile} />
          </Route>
          <Route exact path="/about">
            <About isMobile={isMobile} />
          </Route>
          <Route exact path="/skills">
            <Skills posts={posts} isMobile={isMobile} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
