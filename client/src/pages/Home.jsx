import Skills from "./Skills";
import css from "@emotion/css";
const Home = ({ posts, isMobile }) => {
  return (
    <div>
      <Skills posts={posts} isMobile={isMobile} />
    </div>
  );
};

export default Home;
