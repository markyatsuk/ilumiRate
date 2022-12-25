import s from "./Button.module.css";

export function Button({ children }) {
  return (
    <button type="button" className={s.button}>
      {children}
    </button>
  );
}
