import { css } from "@emotion/css";
import { Link } from "react-router-dom";
const Header = () => {
  const classes = {
    header: css`
      height: 150px;
      width: 100%;
      align-items: center;
      margin-top: 20px;
    `,
    title: css`
      box-shadow: 7px 7px 5px 1px rgba(10, 10, 10, 0.06);
      background-color: #fcf4ed;
      height: 70%;
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
      float: right;
      margin-top: 10px;
      padding-right: 20px;
      list-style: none;
      li {
        font-size: 20px;
        margin-left: 20px;
        cursor: pointer;
        padding: 0;
        :hover {
          border-bottom: 1px solid;
        }
      }
    `,
  };

  const navList = ["about", "skills"];
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <Link className="link" to="/">
          <div className={classes.left}>YutoNakamura</div>
        </Link>
        <div className={classes.right}></div>
      </div>
      <ul className={classes.nav}>
        {navList.map((i) => (
          <li key={i}>
            <Link className="link" to={`/${i}`}>
              <a>{i}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
