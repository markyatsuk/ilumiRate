import s from "./Header.module.css";
import { IconLogo } from "../Icons/Icons";
import { IconMenu } from "../Icons/Icons";
export const Header = () => {
  return (
    <header>
      <div className={s.headerContainer}>
        <div className={s.logoContainer}>
          <IconLogo />
          <p className={s.logoText}>ilumiRate</p>
        </div>
        <IconMenu />
      </div>
    </header>
  );
};
