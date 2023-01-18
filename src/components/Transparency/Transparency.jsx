import s from "./Transparency.module.css";
import { Button } from "../Button/Button";
import { Mobile, Desktop } from "../../services/mediaQuery";
import backgroundIMG from "../../images/transparency.png";
export const Transparency = () => {
  return (
    <>
      <Mobile>
        <section className={s.transparency}>
          <div className="container">
            <h2 className={s.titleTransparency + " title"}>
              Facilitate Transparency
            </h2>
            <p className={s.paragraph}>
              Shine light on the often-guarded business side of Hollywood, and
              create a more equitable marketplace for those within the industry
              by fostering transparency around:
            </p>
            <ul className={s.list}>
              <li className={s.item}>
                Compensation (contracts, gig rates, deal points, salaries, etc.)
              </li>
              <li className={s.item}>
                Exploitation, discrimination, or mistreatment
              </li>
              <li className={s.item}>
                Information and insight that otherwise would not be readily
                accessible
              </li>
            </ul>
            <Button>Sign Up Now</Button>
          </div>
        </section>
      </Mobile>

      <Desktop>
        <section className={s.transparency}>
          <div className={s.desktopContainer}>
            <h2 className={s.titleTransparency + " title"}>
              Facilitate Transparency
            </h2>
            <p className={s.paragraph}>
              Shine light on the often-guarded business side of Hollywood, and
              create a more equitable marketplace for those within the industry
              by fostering transparency around:
            </p>
            <ul className={s.list}>
              <li className={s.item}>
                Compensation (contracts, gig rates, deal points, salaries, etc.)
              </li>
              <li className={s.item}>
                Exploitation, discrimination, or mistreatment
              </li>
              <li className={s.item}>
                Information and insight that otherwise would not be readily
                accessible
              </li>
            </ul>
            <div className={s.btnContainer}>
              <Button>Sign Up Now</Button>
            </div>
          </div>
          <div className={s.imgContainer}>
            <img src={backgroundIMG} alt="backgroundING" />
          </div>
        </section>
      </Desktop>
    </>
  );
};
