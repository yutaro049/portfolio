import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
const Header = ({ isMobile }) => {
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");

  const classes = {
    header: css`
      width: 100%;
    `,
    title: css`
      box-shadow: 7px 7px 5px 1px rgba(10, 10, 10, 0.06);
      background-color: #fcf4ed;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    left: css`
      padding-left: 20px;
      font-size: 30px;
    `,
    right: css`
      margin-right: 20px;
      height: 30px;
      width: 300px;
    `,
    nav: css`
      display: flex;
      justify-content: right;
      margin-top: 10px;
      padding-right: 30px;
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
    left: css`
      padding-left: 20px;
      font-size: 20px;
    `,
    nav: css`
      list-style: none;
      margin-top: 7px;
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
    <div className={classes.header}>
      <div className={classes.title}>
        <Link className="link" to="/">
          <div className={chooseClasses.left}>YutoNakamura</div>
        </Link>
      </div>
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

export default Header;
