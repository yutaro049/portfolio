import { css } from "@emotion/css";
import img from "../img/shiba-inu-3083766_1920.jpg";

const Skill = ({ post }) => {
  const classes = {
    skillWrapper: css`
      width: 50%;
    `,
    skill: css`
      margin: 10px;
      background-color: #fdfaf7;
      box-shadow: 3px 3px 3px 1px rgba(10, 10, 10, 0.05);
      cursor: pointer;
    `,
    img: css`
      height: 300px;
      width: 100%;
      object-fit: cover;
    `,

    title: css`
      margin-left: 5px;
    `,
    date: css`
      margin-right: 5px;
      text-align: right;
    `,
  };

  const date = new Date(post.createdAt);
  const yyyymmdd = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  const dummyDate = {
    title: "サンプル",
    img: img,
    desc: "この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。",
    date: "2021/9/1",
  };

  return (
    <div className={classes.skillWrapper}>
      <div className={classes.skill}>
        <img src={dummyDate.img} alt="" className={classes.img} />
        <h3 className={classes.title}>{post.title}</h3>
        <p className={classes.date}>{yyyymmdd}</p>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};

export default Skill;
