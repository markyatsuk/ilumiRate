import s from "./Versions.module.css";
// import { Button } from "../Button/Button";
// import play from "../../images/svg/play.svg";
export const Versions = ({ image, title, categories, index }) => {
  let categoriesArray = categories.split(",");
  return (
    <div className={s.listContainer}>
      {index === 1 && (
        <>
          <img src={image} alt="icon" className={s.icon} />
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {categoriesArray ? (
              categoriesArray.map((el, index) => (
                <li key={index} className={s.item1 + " " + s.item}>
                  {el}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </>
      )}
      {index === 2 && (
        <>
          <img src={image} alt="icon" className={s.icon} />
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {categoriesArray ? (
              categoriesArray.map((el, index) => (
                <li key={index} className={s.item2 + " " + s.item}>
                  {el}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </>
      )}
      {index === 3 && (
        <>
          <img src={image} alt="icon" className={s.icon} />
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {categoriesArray ? (
              categoriesArray.map((el, index) => (
                <li key={index} className={s.item3 + " " + s.item}>
                  {el}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </>
      )}
      {index === 4 && (
        <>
          <img src={image} alt="icon" className={s.icon} />
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {categoriesArray ? (
              categoriesArray.map((el, index) => (
                <li key={index} className={s.item4 + " " + s.item}>
                  {el}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </>
      )}
    </div>
  );
};
