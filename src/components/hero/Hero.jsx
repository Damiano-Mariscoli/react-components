import style from "./Hero.module.css";
import Card from "../card/card.jsx";
export default function Main() {
  return (
    <>
      <div className={`${style.dFlex}  ${style.flexCenter}`}>
        <div className={style.containerMd}>
          <div className={`${style.dFlex} ${style.flexCenter}`}>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
