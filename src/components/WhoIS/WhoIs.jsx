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
    <section className={s.WhoIs}>
      <h2>
        Who’s on <span>ilumiRate</span> ?
      </h2>
      <p>
        Our users vary from a plethora of professions in the entertainment and
        media industry.
      </p>
      <ul>
        <li>
          <img src={ActorsJPG} alt="" />
          <p>Actors</p>
        </li>
        <li>
          <img src={WritersJPG} alt="" />
          <p>Writers</p>
        </li>
        <li>
          <img src={DirectorsJPG} alt="" />
          <p>Directors</p>
        </li>
        <li>
          <img src={ProducersJPG} alt="" />
          <p>Producers</p>
        </li>
        <li>
          <img src={CinematographersJPG} alt="" />
          <p>Cinematographers</p>
        </li>
        <li>
          <img src={GripJPG} alt="" />
          <p>Grip/Gaffers</p>
        </li>
        <li>
          <img src={EditorsJPG} alt="" />
          <p>Editors</p>
        </li>
        <li>
          <img src={EntryLevelCrewJPG} alt="" />
          <p>Entry Level Crew/Staff</p>
        </li>
        <li>
          <img src={PhotographersJPG} alt="" />
          <p>Photographers</p>
        </li>
        <li>
          <img src={AgentsJPG} alt="" />
          <p>Agents/Managers</p>
        </li>
        <li>
          <img src={AttorneysJPG} alt="" />
          <p>Attorneys</p>
        </li>
        <li>
          <img src={ExecutivesJPG} alt="" />
          <p>Executives</p>
        </li>
      </ul>
    </section>
  );
};
