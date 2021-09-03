import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Skill from "../components/Skill";
import { axiosInstance } from "../../config";
const Skills = () => {
  const [posts, setPosts] = useState([]);

  const classes = {
    skills: css`
      margin: 30px auto 0;
      width: 90%;
      display: flex;
      flex-wrap: wrap;
    `,
    title: css`
      font-size: 50px;
      text-align: center;
      width: 100%;
    `,
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className={classes.skills}>
      <div className={classes.title}>Skills</div>
      {posts.map((post) => (
        <Skill post={post} />
      ))}
    </div>
  );
};

export default Skills;
