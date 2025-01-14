import style from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }) => {
  return (
    <div className={style.sectionTitle}>
      <h3>{title}</h3>
    </div>
  );
}