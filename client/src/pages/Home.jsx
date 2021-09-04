import Skills from "./Skills";
import css from "@emotion/css";
const Home = ({ posts }) => {
  return (
    <div>
      <Skills posts={posts} />
    </div>
  );
};

export default Home;
