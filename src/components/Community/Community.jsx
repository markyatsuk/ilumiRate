import s from "./Community.module.css";
import { IconAppStore } from "../Icons/Icons";
import { IconGooglePlay } from "../Icons/Icons";
import { Mobile, Desktop } from "../../services/mediaQuery";
import backgroundIMG from "../../images/comunity.png";
import appStore from "../../images/svg/appStore.svg";
import googlePlay from "../../images/svg/googlePlay.svg";
export const Community = () => {
  return (
    <>
      <Mobile>
        <section className={s.community}>
          <div className="container">
            <h2 className={s.titleCommunity + " title"}>Build Community</h2>
            <p className={s.paragraph}>
              Read, review and connect with other entertainment industry
              professionals:{" "}
            </p>
            <div className={s.listsContainer}>
              <ul className={s.leftList}>
                <li className={s.item}>Creatives</li>
                <li className={s.item}>Current and Former Employees</li>
                <li className={s.item}>Managers</li>
                <li className={s.item}>Agents</li>
                <li className={s.item}>Freelancers</li>
                <li className={s.item}>Talent</li>
                <li className={s.item}>Producers</li>
                <li className={s.item}>Executives</li>
              </ul>
              <ul className={s.rightList}>
                <li className={s.item}>Day Players</li>
                <li className={s.item}>Union and Non-Union Crew Members</li>
                <li className={s.item}>Producers</li>
                <li className={s.item}>
                  Corporations (Studios, Streamers, Networks)
                </li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                className={s.downloadBtn + " " + s.appStore}
              >
                <IconAppStore />
              </button>
              <button
                type="button"
                className={s.downloadBtn + " " + s.googlePlay}
              >
                <IconGooglePlay />
              </button>
            </div>
          </div>
        </section>
      </Mobile>
      <Desktop>
        <section className={s.community}>
          <div className={s.desktopContainer}>
            <h2 className={s.titleCommunity + " title"}>Build Community</h2>
            <p className={s.paragraph}>
              Read, review and connect with other entertainment industry
              professionals:{" "}
            </p>
            <div className={s.listsContainer}>
              <ul className={s.leftList}>
                <li className={s.item}>Creatives</li>
                <li className={s.item}>Managers</li>
                <li className={s.item}>Agents</li>
                <li className={s.item}>Freelancers</li>
                <li className={s.item}>Talent</li>
                <li className={s.item}>Producers</li>
                <li className={s.item}>Executives</li>
              </ul>
              <ul className={s.rightList}>
                <li className={s.item}>Current and Former Employees</li>
                <li className={s.item}>Day Players</li>
                <li className={s.item}>Union and Non-Union Crew Members</li>
                <li className={s.item}>Producers</li>
                <li className={s.item}>
                  Corporations (Studios, Streamers, Networks)
                </li>
              </ul>
            </div>
            <div className={s.btnContainer}>
              <button
                type="button"
                className={s.downloadBtn + " " + s.appStore}
              >
                <img src={appStore} alt="appStore" />
              </button>
              <button
                type="button"
                className={s.downloadBtn + " " + s.googlePlay}
              >
                <img src={googlePlay} alt="googlePlay" />
              </button>
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
