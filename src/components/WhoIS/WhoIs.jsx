import s from "./WhoIs.module.css";
import ActorsJPG from "../../images/Actors.jpg";
import WritersJPG from "../../images/Writers.jpg";
import DirectorsJPG from "../../images/Directors.jpg";
import ProducersJPG from "../../images/Producers.jpg";
import CinematographersJPG from "../../images/Cinematographers.jpg";
import GripJPG from "../../images/Grip.jpg";
import EditorsJPG from "../../images/Editors.jpg";
import EntryLevelCrewJPG from "../../images/EntryLevelCrew.jpg";
import PhotographersJPG from "../../images/Photographers.jpg";
import AgentsJPG from "../../images/Agents.jpg";
import AttorneysJPG from "../../images/Attorneys.jpg";
import ExecutivesJPG from "../../images/Executives.jpg";

export const WhoIs = () => {
  return (
    <section className={s.whoIs}>
      <div className="container">
        <h2 className={s.whoIsTitle + " title"}>
          Who’s on <span className={s.titleSpan}>ilumiRate</span> ?
        </h2>
        <p className={s.paragraph}>
          Our users vary from a plethora of professions in the entertainment and
          media industry.
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <img src={ActorsJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Actors</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={WritersJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Writers</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={DirectorsJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Directors</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={ProducersJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Producers</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={CinematographersJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Cinematographers</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={GripJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Grip/Gaffers</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={EditorsJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Editors</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={EntryLevelCrewJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Entry Level Crew/Staff</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={PhotographersJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Photographers</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={AgentsJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Agents/Managers</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={AttorneysJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Attorneys</p>
            </div>
          </li>
          <li className={s.item}>
            <img src={ExecutivesJPG} alt="" />
            <div className={s.jobContainer}>
              <p className={s.job}>Executives</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
