import s from "./Community.module.css";
import { IconAppStore } from "../Icons/Icons";
import { IconGooglePlay } from "../Icons/Icons";
export const Community = () => {
  return (
    <section className={s.community}>
      <h2>Build Community</h2>
      <p>
        Read, review and connect with other entertainment industry
        professionals:{" "}
      </p>
      <ul>
        <li>Creatives</li>
        <li>Current and Former Employees</li>
        <li>Managers</li>
        <li>Agents</li>
        <li>Freelancers</li>
        <li>Talent</li>
        <li>Producers</li>
        <li>Executives</li>
      </ul>
      <ul>
        <li>Day Players</li>
        <li>Union and Non-Union Crew Members</li>
        <li>Producers</li>
        <li>Corporations (Studios, Streamers, Networks)</li>
      </ul>
      <div>
        <IconAppStore />
        <IconGooglePlay />
      </div>
    </section>
  );
};
