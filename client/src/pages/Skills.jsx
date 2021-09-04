import { css } from "@emotion/css";
import Skill from "../components/Skill";
const Skills = ({ posts }) => {
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

  return (
    <div className={classes.skills}>
      <div className={classes.title}>Skills</div>
      {(posts || []).map((post) => (
        <Skill post={post} />
      ))}
    </div>
  );
};

export default Skills;
