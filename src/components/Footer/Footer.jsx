import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className={s.footerText}>
          Copyright © 2022, ilumiRate, Inc. "ilumiRate" and logo are registered
          trademarks of ilumiRate, Inc
        </p>
      </div>
    </footer>
  );
};
