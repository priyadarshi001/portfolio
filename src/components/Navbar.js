//import "../styles/Navbar.css";
import { Link } from "react-scroll";
import logo from "../assets/lion-logo.png";

const styles = { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1 };

export default function Navbar() {
  return (
    <nav className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" className="w-12"/>
        </div>
        <div className="md:flex space-x-6 text-lg font-semibold text-darkGreyishBlue">
          <Link
            spy={true}
            to="Home"
            smooth={true}
            className="hover:text-veryLightGray cursor-pointer"
          >
            Home
          </Link>
          <Link
            spy={true}
            to="About"
            smooth={true}
            className="hover:text-veryLightGray cursor-pointer"
          >
            About
          </Link>
          <Link
            spy={true}
            to="Skills"
            smooth={true}
            className="hover:text-veryLightGray cursor-pointer"
          >
            Skills
          </Link>
          <Link
            spy={true}
            to="Projects"
            smooth={true}
            className="hover:text-veryLightGray cursor-pointer"
          >
            Projects
          </Link>
          <Link
            spy={true}
            to="Experiences"
            smooth={true}
            className="hover:text-veryLightGray cursor-pointer"
          >
            Experiences
          </Link>
        </div>
      </div>
    </nav>
  );
}
