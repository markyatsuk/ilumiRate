import s from "./Hero.module.css";
import { IconPlay } from "../Icons/Icons";
import { Button } from "../Button/Button";
export const Hero = () => {
  return (
    <section className={s.hero}>
      <h1>Create the transparency you want to see</h1>
      <Button>Try Now for Free</Button>
      <a href="https://www.google.pl/">
        Watch demo <IconPlay />
      </a>
    </section>
  );
};
