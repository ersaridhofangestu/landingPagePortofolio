import Style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={Style.footer}>
      <ul className={Style.menu}>
        <li>
          <a className={Style.link} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={Style.link} href="/">
            About
          </a>
        </li>
        <li>
          <a className={Style.link} href="/">
            Testmonials
          </a>
        </li>
        <li>
          <a className={Style.link} href="/">
            Demo
          </a>
        </li>
      </ul>
      <div className={Style.line}></div>
      <div>
        <p className={Style.copyRight}>2022 execute, inc all right reserved</p>
      </div>
    </div>
  );
}
