import { css } from "@emotion/css";
import img from "../img/shiba-inu-3083766_1920.jpg";

const Skill = ({ post, isMobile }) => {
  const classes = {
    skillWrapper: css`
      width: 50%;
      max-width: 500px;
    `,
    skill: css`
      margin: 10px;
      background-color: #fdfaf7;
      box-shadow: 3px 3px 3px 1px rgba(10, 10, 10, 0.05);
    `,
    img: css`
      height: 300px;
      width: 100%;
      object-fit: cover;
    `,

    title: css`
      margin-left: 5px;
      a {
        cursor: pointer;
        color: black;
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
    `,
    date: css`
      margin-right: 5px;
      text-align: right;
    `,
  };
  const classesM = {
    skillWrapper: css`
      width: 100%;
    `,
    img: css`
      height: 200px;
      width: 100%;
      object-fit: cover;
    `,

    desc: css`
      font-size: 10px;
      margin-bottom: 10px;
    `,
  };

  const date = new Date(post.createdAt);
  const yyyymmdd = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  const dummyPost = {
    title: "サンプル",
    img: img,
    desc: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。",
    url: "https://coffeefreec.web.app/",
    date: "2021/9/1",
  };
  const chooseClasses = isMobile ? classesM : classes;

  return (
    <div className={chooseClasses.skillWrapper}>
      <div className={classes.skill}>
        <a href={post.url} target="_blank">
          <img src={dummyPost.img} alt="" className={chooseClasses.img} />
        </a>
        <h3 className={classes.title}>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </h3>
        <p className={classes.date}>{yyyymmdd}</p>
        <p className={chooseClasses.desc}>{post.desc}</p>
      </div>
    </div>
  );
};

export default Skill;
