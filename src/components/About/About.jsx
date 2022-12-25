import s from "./About.module.css";
import { IconLogo64 } from "../Icons/Icons";

export const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.logoContainer}>
          <IconLogo64 />
        </div>
        <h2 className={s.titleAbout + " title"}>
          Anonymously <span className={s.titleYelow}>review</span> and{" "}
          <span className={s.titleYelow}>rate</span> your representation and
          work experience in Hollywood
        </h2>
        <p className={s.textAbout}>
          ilumiRate is a review and community-based app and website that
          provides users the ability to anonymously rate, review and share their
          experiences, salaries, and thoughts within the tv, film, entertainment
          and media industry including but limited to: talent agents, managers,
          attorneys, production companies, casting offices, studios, individual
          sets, media entities, networks, streamers and more.
        </p>
      </div>
    </section>
  );
};
