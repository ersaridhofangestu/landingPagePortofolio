import { useState } from "react";
import Logo from "../../assets/logo.png";
import Style from "./Navbar.module.css";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleLink = () => {
    {
      setClick(() => {
        if (!click) {
          setClick(click);
        }
      });
    }
  };
  window.addEventListener("scroll", handleChange);
  return (
    <nav className={color ? Style.navBg : Style.nav}>
      <div className={Style.container}>
        <div className={Style.logo}>
          <a className="" href="/">
            <img className={Style.img} src={Logo} alt="logo" />
          </a>
        </div>
        <ul className={Style.menu}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className={Style.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className={Style.link}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={Style.link}
            >
              Testmonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="demo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={Style.link}
            >
              Demo
            </Link>
          </li>
        </ul>
        <ul className={click ? Style.open : Style.close}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-350}
              duration={500}
              onSetActive={handleLink}
              className={Style.link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
              onSetActive={handleLink}
              className={Style.link}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleLink}
              className={Style.link}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="demo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleLink}
              className={Style.link}
            >
              Demo
            </Link>
          </li>
        </ul>
        <div onClick={handleClick}>
          {click ? (
            <FaXmark className={Style.btn} />
          ) : (
            <IoMenu className={Style.btn} />
          )}
        </div>
      </div>
    </nav>
  );
}
