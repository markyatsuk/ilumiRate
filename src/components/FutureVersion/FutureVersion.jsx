import s from "./FutureVersion.module.css";
import { IconMusic } from "../Icons/Icons";
import { IconModeling } from "../Icons/Icons";
import { IconFootball } from "../Icons/Icons";
import { IconEsports } from "../Icons/Icons";
export const FutureVersion = () => {
  return (
    <section className={s.futureVersion}>
      <h2>ilumiRate 2.0 Coming Soon</h2>
      <p>Future versions will facilitate transparency for:</p>
      <ul>
        <li>
          <IconMusic />
          <p>Music</p>
          <ul>
            <li>Music artists </li>
            <li>Producers</li>
            <li>A&Rs</li>
            <li>A&Rs</li>
            <li>Song writers</li>
            <li>Independent labels </li>
          </ul>
        </li>
        <li>
          <IconModeling />
          <p>Modeling</p>
          <ul>
            <li>Agencies</li>
            <li>Agents</li>
            <li>Managers</li>
            <li>Management Companies</li>
            <li>Photographers</li>
            <li>Brands</li>
          </ul>
        </li>
        <li>
          <IconFootball />
          <p>Sports</p>
          <ul>
            <li>Major</li>
            <li>Attorneys</li>
            <li>Managers</li>
            <li>Teams</li>
            <li>Minor Professional Sports Leagues</li>
            <li>Organizations</li>
            <li>Owners</li>
            <li>Agents</li>
          </ul>
        </li>
        <li>
          <IconEsports />
          <p>E-Sports</p>
          <ul>
            <li>Major</li>
            <li>Minor Professional Leagues</li>
            <li>Attorneys</li>
            <li>Managers</li>
            <li>Agents</li>
            <li>Brands</li>
            <li>Sponsors</li>
            <li>Endorsers</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
