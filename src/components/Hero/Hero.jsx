import s from "./Hero.module.css";
// import { IconPlay } from "../Icons/Icons";
import { Button } from "../Button/Button";
import play from "../../images/svg/play.svg";
export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <h1 className={s.mainTitle + " title"}>
          Create the transparency you want to see
        </h1>
        <Button>Try Now for Free</Button>
        <a href="https://www.google.pl/" className={s.link}>
          Watch demo <img src={play} alt="play" className={s.play} />
        </a>
      </div>
    </section>
  );
};
