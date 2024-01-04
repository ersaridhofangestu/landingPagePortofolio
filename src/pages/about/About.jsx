import Style from "./About.module.css";
import john from "../../assets/john-doe.png";

export default function About() {
  return (
    <div className={Style.about}>
      <img src={john} alt="john deo" id="about" />
      <div className={Style.text}>
        <h2 className={Style.h2}>About</h2>
        <div className={Style.line}></div>
        <div className={Style.paragraf}>
          <p className={Style.p1}>
            Intense is an Intrenational Financial Planning company with offices
            in multiple jurisdictions over the world Working with Intense give
            me the ability to advise international expatriates living in the
            middle east from where I live in USA.
          </p>
          <p className={Style.p2}>
            I am john Doe, a senior advisor for an independently owned financial
            planning company called Intense
          </p>
        </div>
        <div>
          <button className={Style.btn}>explore more</button>
        </div>
      </div>
    </div>
  );
}
