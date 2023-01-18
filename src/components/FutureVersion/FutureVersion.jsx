import s from "./FutureVersion.module.css";
import { Versions } from "../Versions/Versions";
import note from "../../images/svg/music.svg";
import modeling from "../../images/svg/modeling.svg";
import sport from "../../images/svg/sportsFootball.svg";
import eSport from "../../images/svg/sportsEsports.svg";
import { Mobile, Desktop } from "../../services/mediaQuery";
export const FutureVersion = () => {
  return (
    <section className={s.futureVersion}>
      <div className="container">
        <Mobile>
          <h2 className={s.futureVersionTitle}>
            ilumiRate 2.0 <br /> Coming Soon
          </h2>
        </Mobile>
        <Desktop>
          <h2 className={s.futureVersionTitle}>ilumiRate 2.0 Coming Soon</h2>
        </Desktop>
        <p className={s.paragraph}>
          Future versions will facilitate transparency for:
        </p>
        <div className={s.listContainer}>
          <Versions
            image={note}
            title="Music"
            categories="Music artist,Producers,A&Rs,A&Rs,Song writers,Independent labels"
            index={1}
          />
          <Versions
            image={modeling}
            title="Modeling"
            categories="Agencies,Agents,Managers,Management Companies,Photographers,Brands"
            index={2}
          />
          <Versions
            image={sport}
            title="Sports"
            categories="Major,Attorneys,Managers,Teams,Owners,Organizations,Minor Professional Sports Leagues,Agents"
            index={3}
          />
          <Versions
            image={eSport}
            title="E-Sports"
            categories="Major,Minor Professional Leagues,Attorneys,Managers,Agents,Brands,Sponsors,Endorsers"
            index={4}
          />
        </div>
      </div>
    </section>
  );
};
