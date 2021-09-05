import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
const Footer = ({ isMobile }) => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const classes = {
    footer: css`
      width: 100%;
    `,

    nav: css`
      display: flex;
      justify-content: left;
      margin: 60px 0 30px 0;
      padding-left: 30px;
      list-style: none;

      li {
        font-size: 25px;
        margin-left: 20px;
        cursor: pointer;
        padding: 0;
        :hover {
          text-decoration: underline;
        }
      }
    `,
  };
  const classesM = {
    nav: css`
      list-style: none;
      margin: 10px 0 10px 0;
      display: flex;
      li {
        width: 50%;
        text-align: center;
        font-size: 20px;
        font-weight: 300;
        margin: auto 0;
        cursor: pointer;

        :hover {
          text-decoration: underline;
        }
      }
      p {
        padding: 12px 0;
      }
    `,
  };

  const navList = ["about", "skills"];
  const chooseClasses = isMobile ? classesM : classes;
  return (
    <div className={classes.footer}>
      <ul className={chooseClasses.nav}>
        {navList.map((i) => (
          <li key={i.toString()}>
            <Link className="link" to={`/${i}`}>
              <p style={i === pathName ? { opacity: 0.5 } : {}}>{i}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
