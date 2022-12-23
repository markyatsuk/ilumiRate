import s from "./About.module.css";
import { IconLogo } from "../Icons/Icons";

export const About = () => {
  return (
    <section className={s.about}>
      <IconLogo />
      <h2>
        Anonymously <span>review</span> and <span>rate</span> your
        representation and work experience in Hollywood
      </h2>
      <p>
        ilumiRate is a review and community-based app and website that provides
        users the ability to anonymously rate, review and share their
        experiences, salaries, and thoughts within the tv, film, entertainment
        and media industry including but limited to: talent agents, managers,
        attorneys, production companies, casting offices, studios, individual
        sets, media entities, networks, streamers and more.
      </p>
    </section>
  );
};
