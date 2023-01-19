import s from "./WhoIs.module.css";
import ActorsJPG from "../../images/Actors.jpg";
import ActorsJPGDesktop from "../../images/ActorsDesktop.jpg";
import WritersJPG from "../../images/Writers.jpg";
import WritersJPGDesktop from "../../images/WritersDesktop.jpg";
import DirectorsJPG from "../../images/Directors.jpg";
import DirectorsJPGDesktop from "../../images/DirectorsDesktop.jpg";
import ProducersJPG from "../../images/Producers.jpg";
import ProducersJPGDesktop from "../../images/ProducersDesktop.jpg";
import CinematographersJPG from "../../images/Cinematographers.jpg";
import CinematographersJPGDesktop from "../../images/CinematographersDesktop.jpg";
import GripJPG from "../../images/Grip.jpg";
import GripJPGDesktop from "../../images/GripDesktop.jpg";
import EditorsJPG from "../../images/Editors.jpg";
import EditorsJPGDesktop from "../../images/EditorsDesktop.jpg";
import EntryLevelCrewJPG from "../../images/EntryLevelCrew.jpg";
import EntryLevelCrewJPGDesktop from "../../images/EntryLevelCrewDesktop.jpg";
import PhotographersJPG from "../../images/Photographers.jpg";
import PhotographersJPGDesktop from "../../images/PhotographersDesktop.jpg";
import AgentsJPG from "../../images/Agents.jpg";
import AgentsJPGDesktop from "../../images/AgentsDesktop.jpg";
import AttorneysJPG from "../../images/Attorneys.jpg";
import AttorneysJPGDesktop from "../../images/AttorneysDesktop.jpg";
import ExecutivesJPG from "../../images/Executives.jpg";
import ExecutivesJPGDesktop from "../../images/ExecutivesDesktop.jpg";

import { Mobile, Desktop } from "../../services/mediaQuery";
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
            <Mobile>
              <img src={ActorsJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={ActorsJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Actors</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={WritersJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={WritersJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Writers</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={DirectorsJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={DirectorsJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Directors</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={ProducersJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={ProducersJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Producers</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={CinematographersJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={CinematographersJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Cinematographers</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={GripJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={GripJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Grip/Gaffers</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={EditorsJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={EditorsJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Editors</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={EntryLevelCrewJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={EntryLevelCrewJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Entry Level Crew/Staff</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={PhotographersJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={PhotographersJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Photographers</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={AgentsJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={AgentsJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Agents/Managers</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={AttorneysJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={AttorneysJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Attorneys</p>
            </div>
          </li>
          <li className={s.item}>
            <Mobile>
              <img src={ExecutivesJPG} alt="" />
            </Mobile>
            <Desktop>
              <img src={ExecutivesJPGDesktop} alt="" />
            </Desktop>
            <div className={s.jobContainer}>
              <p className={s.job}>Executives</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
