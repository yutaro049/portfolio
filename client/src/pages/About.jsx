import { css } from "@emotion/css";
import img from "../img/shiba-inu-3083766_1920.jpg";
const About = ({ isMobile }) => {
  const classes = {
    about: css`
      margin: 50px auto 0;
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
  const classesM = {
    about: css`
      margin: 20px auto 0;
      width: 90%;
    `,
    title: css`
      font-size: 25px;
      text-align: center;
    `,
    profile: css`
      text-align: center;
      p {
        margin-left: 10px;
        margin-bottom: 5px;
      }
    `,
    img: css`
      height: 150px;
      width: 200px;
      margin-top: 10px;
      object-fit: cover;
    `,
    desc: css``,
  };
  const chooseClasses = isMobile ? classesM : classes;

  return (
    <div className={chooseClasses.about}>
      <div className={chooseClasses.title}>About</div>
      <div className={chooseClasses.profile}>
        <img src={img} className={chooseClasses.img} />
        <div className={chooseClasses.desc}>
          <p>中村勇登</p>
          <p>Nakamura Yuto</p>
          <p>プログラミング勉強中</p>
        </div>
      </div>
    </div>
  );
};

export default About;
