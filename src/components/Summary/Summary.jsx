import s from "./Summary.module.css";
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
        <div className={s.contentContainer}>
          <div className={s.logoContainer}>
            {/* <IconLogo /> */}
            <img src={bigLogo} alt="bigLogo" className={s.logo} />
            <h2 className={s.logoTitle}>ilumiRate</h2>
          </div>
          <ul className={s.list + " " + s.listMain}>
            <li className={s.listMainItem}>
              <h3 className={s.listTitle}>ilumiRate</h3>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    About / Press
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Awards
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Blog
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Research
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Guides
                  </a>
                </li>
              </ul>
            </li>
            <li className={s.listMainItem}>
              <h3 className={s.listTitle}>Employers</h3>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Get a Free Employer
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Accounts
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Employer Center
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Post a Job
                  </a>
                </li>
              </ul>
            </li>
            <li className={s.listMainItem}>
              <h3 className={s.listTitle}>Community</h3>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Help / Contact Us
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Guidelines
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Terms of Use
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Privacy & Cookies
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Privacy Center
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Do Not Sell My
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Personal Information
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Cookie Consent Tool
                  </a>
                </li>
              </ul>
            </li>
            <li className={s.listMainItem}>
              <h3 className={s.listTitle}>Work With Us</h3>
              <ul className={s.list}>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Advertisers
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Developers
                  </a>
                </li>
                <li className={s.listItem}>
                  <a href="!" className={s.summaryLink}>
                    Careers
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className={s.socialMedia}>
          <li>
            <p className={s.downloadText}>
              <span>Download the App</span>{" "}
              <img src={appleLogo} alt="apple logo" className={s.appleLogo} />{" "}
              <img
                src={androidLogo}
                alt="android logo"
                className={s.androidLogo}
              />
            </p>
          </li>
          <li>
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
          </li>
          <li>
            <select className={s.selectCountry}>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
          </li>
        </ul>
      </div>
    </section>
  );
};
