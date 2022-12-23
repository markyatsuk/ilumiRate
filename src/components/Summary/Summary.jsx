import s from "./Summary.module.css";
import { IconLogo } from "../Icons/Icons";
import { IconAppleLogo } from "../Icons/Icons";
import { IconAndroidLogo } from "../Icons/Icons";
import { IconFacebook } from "../Icons/Icons";
import { IconTwitter } from "../Icons/Icons";
import { IconYoutube } from "../Icons/Icons";
import { IconInstagram } from "../Icons/Icons";

export const Summary = () => {
  return (
    <section className={s.summary}>
      <div>
        <IconLogo />
        <h2>ilumiRate</h2>
      </div>
      <ul>
        <li>
          <h3>ilumiRate</h3>
          <ul>
            <li>About / Press</li>
            <li>Awards</li>
            <li>Blog</li>
            <li>Research</li>
            <li>Guides</li>
          </ul>
        </li>
        <li>
          <h3>Employers</h3>
          <ul>
            <li>Get a Free Employer</li>
            <li>Accounts</li>
            <li>Employer Center</li>
            <li>Post a Job</li>
          </ul>
        </li>
        <li>
          <h3>Community</h3>
          <ul>
            <li>Help / Contact Us</li>
            <li>Guidelines</li>
            <li>Terms of Use</li>
            <li>Privacy & Cookies</li>
            <li>Privacy Center</li>
            <li>Do Not Sell My</li>
            <li>Personal Information</li>
            <li>Cookie Consent Tool</li>
          </ul>
        </li>
        <li>
          <h3>Work With Us</h3>
          <ul>
            <li>Advertisers</li>
            <li>Developers</li>
            <li>Careers</li>
          </ul>
        </li>
      </ul>
      <div>
        <p>
          Download the App <IconAppleLogo /> <IconAndroidLogo />{" "}
        </p>
        <ul>
          <li>
            <IconFacebook />
          </li>
          <li>
            <IconTwitter />
          </li>
          <li>
            <IconYoutube />
          </li>
          <li>
            <IconInstagram />
          </li>
        </ul>
        <select>
          <option>United States</option>
          <option>United Kingdom</option>
        </select>
      </div>
    </section>
  );
};
