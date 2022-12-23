import s from "./Transparency.module.css";
import { Button } from "../Button/Button";
export const Transparency = () => {
  return (
    <section className={s.transparency}>
      <h2>Facilitate Transparency</h2>
      <p>
        Shine light on the often-guarded business side of Hollywood, and create
        a more equitable marketplace for those within the industry by fostering
        transparency around:
      </p>
      <ul>
        <li>
          Compensation (contracts, gig rates, deal points, salaries, etc.)
        </li>
        <li>Exploitation, discrimination, or mistreatment</li>
        <li>
          Information and insight that otherwise would not be readily accessible
        </li>
      </ul>
      <Button>Sign Up Now</Button>
    </section>
  );
};
