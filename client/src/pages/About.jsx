import { css } from "@emotion/css";
import img from "../img/shiba-inu-3083766_1920.jpg";
const About = () => {
  const classes = {
    about: css`
      margin: 30px auto 0;
      width: 90%;
    `,
    title: css`
      font-size: 50px;
      text-align: center;
    `,
    profile: css`
      display: flex;
      margin: 30px 0;
      align-items: center;
      p {
        margin-left: 10px;
        margin-bottom: 5px;
      }
    `,
    img: css`
      height: 150px;
      width: 200px;
      object-fit: cover;
    `,
    desc: css``,
  };

  return (
    <div className={classes.about}>
      <div className={classes.title}>About</div>
      <div className={classes.profile}>
        <img src={img} className={classes.img} />
        <div className={classes.desc}>
          <p>中村勇登</p>
          <p>Nakamura Yuto</p>
          <p>プログラミング勉強中</p>
        </div>
      </div>
    </div>
  );
};

export default About;
