import s from "./Summary.module.css";
import { IconLogo } from "../Icons/Icons";
import { IconAppleLogo } from "../Icons/Icons";
import { IconAndroidLogo } from "../Icons/Icons";
import { IconFacebook } from "../Icons/Icons";
import { IconTwitter } from "../Icons/Icons";
import { IconYoutube } from "../Icons/Icons";
import { IconInstagram } from "../Icons/Icons";
import bigLogo from "../../images/svg/logo80x80.svg";
import appleLogo from "../../images/svg/appleLogo.svg";
import androidLogo from "../../images/svg/androidLogo.svg";

export const Summary = () => {
  return (
    <section className={s.summary}>
      <div className="container">
        <div>
          {/* <IconLogo /> */}
          <img src={bigLogo} alt="bigLogo" className={s.logo} />
          <h2 className={s.logoTitle}>ilumiRate</h2>
        </div>
        <ul className={s.list + " " + s.listMain}>
          <li className={s.listMainItem}>
            <h3 className={s.listTitle}>ilumiRate</h3>
            <ul className={s.list}>
              <li className={s.listItem}>About / Press</li>
              <li className={s.listItem}>Awards</li>
              <li className={s.listItem}>Blog</li>
              <li className={s.listItem}>Research</li>
              <li className={s.listItem}>Guides</li>
            </ul>
          </li>
          <li className={s.listMainItem}>
            <h3 className={s.listTitle}>Employers</h3>
            <ul className={s.list}>
              <li className={s.listItem}>Get a Free Employer</li>
              <li className={s.listItem}>Accounts</li>
              <li className={s.listItem}>Employer Center</li>
              <li className={s.listItem}>Post a Job</li>
            </ul>
          </li>
          <li className={s.listMainItem}>
            <h3 className={s.listTitle}>Community</h3>
            <ul className={s.list}>
              <li className={s.listItem}>Help / Contact Us</li>
              <li className={s.listItem}>Guidelines</li>
              <li className={s.listItem}>Terms of Use</li>
              <li className={s.listItem}>Privacy & Cookies</li>
              <li className={s.listItem}>Privacy Center</li>
              <li className={s.listItem}>Do Not Sell My</li>
              <li className={s.listItem}>Personal Information</li>
              <li className={s.listItem}>Cookie Consent Tool</li>
            </ul>
          </li>
          <li className={s.listMainItem}>
            <h3 className={s.listTitle}>Work With Us</h3>
            <ul className={s.list}>
              <li className={s.listItem}>Advertisers</li>
              <li className={s.listItem}>Developers</li>
              <li className={s.listItem}>Careers</li>
            </ul>
          </li>
        </ul>
        <div>
          <p className={s.downloadText}>
            <span>Download the App</span>{" "}
            <img src={appleLogo} alt="apple logo" className={s.appleLogo} />{" "}
            <img
              src={androidLogo}
              alt="android logo"
              className={s.androidLogo}
            />
          </p>
          <ul className={s.list + " " + s.socialList}>
            <li className={s.socialItem}>
              <IconFacebook />
            </li>
            <li className={s.socialItem}>
              <IconTwitter />
            </li>
            <li className={s.socialItem}>
              <IconYoutube />
            </li>
            <li className={s.socialItem}>
              <IconInstagram />
            </li>
          </ul>
          <select className={s.selectCountry}>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
        </div>
      </div>
    </section>
  );
};
