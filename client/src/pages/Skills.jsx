import { css } from "@emotion/css";
import Skill from "../components/Skill";
const Skills = ({ posts, isMobile }) => {
  const classes = {
    skills: css`
      margin: 50px auto 0;
      width: 90%;
      max-width: 1000px;
      display: flex;
      flex-wrap: wrap;
    `,
    title: css`
      font-size: 50px;
      text-align: center;
      width: 100%;
    `,
  };
  const classesM = {
    skills: css`
      margin: 20px auto 0;
      width: 90%;
      flex-wrap: wrap;
    `,
    title: css`
      font-size: 25px;
      text-align: center;
      width: 100%;
    `,
  };
  const chooseClasses = isMobile ? classesM : classes;

  return (
    <div className={chooseClasses.skills}>
      <div className={chooseClasses.title}>Skills</div>
      {posts.map((post) => (
        <Skill post={post} isMobile={isMobile} />
      ))}
    </div>
  );
};

export default Skills;
