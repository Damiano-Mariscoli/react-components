import style from "./Hero.module.css";

export default function Main() {
  return (
    <>
      <div className={`${style.dFlex}  ${style.flexCenter}`}>
        <div className={style.containerMd}></div>
      </div>
    </>
  );
}
