import s from "./Header.module.css";
import { IconLogo } from "../Icons/Icons";
import { IconMenu } from "../Icons/Icons";
export const Header = () => {
  return (
    <header>
      <div>
        <IconLogo />
        <p>ilumiRate</p>
      </div>
      <IconMenu />
    </header>
  );
};
