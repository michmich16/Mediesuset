import style from "./SectionTitle.module.scss";

export const SectionTitle = ({ title, text }) => {
  return (
    <div className={style.sectionTitle}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}