import s from "./Header.module.css";
import { IconLogo } from "../Icons/Icons";
import { IconMenu } from "../Icons/Icons";
import { Mobile } from "../../services/mediaQuery";
import { Desktop } from "../../services/mediaQuery";
import logo from "../../images/svg/logo.svg";
export const Header = () => {
  return (
    <header>
      <div className={s.headerContainer}>
        <div className={s.logoContainer}>
          <img src={logo} alt="logo" className={s.logo} />
          <p className={s.logoText}>ilumiRate</p>
        </div>
        <Mobile>
          <IconMenu />
        </Mobile>
        <Desktop>
          <div className={s.btnContainer}>
            <button type="button" className={s.autorize + " " + s.logIn}>
              Log In
            </button>
            <button type="button" className={s.autorize + " " + s.signUp}>
              Sign Up
            </button>
          </div>
        </Desktop>
      </div>
    </header>
  );
};
