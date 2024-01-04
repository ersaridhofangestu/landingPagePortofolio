import Style from "./Hero.module.css";
import Bg from "../../assets/hero.jpg";
import { Parallax } from "react-parallax";
export default function Hero() {
  return (
    <Parallax
      bgImage={Bg}
      bgImageAlt="city"
      strength={500}
      className={Style.hero}
    >
      <div className={Style.contant} id="home">
        <small>call us</small>
        <p>1-800-123-4567</p>
        <h2>Because Mony</h2>
        <p>Done's come with intructions</p>
        <button className={Style.btn}>Free consultation</button>
      </div>
    </Parallax>
  );
}
