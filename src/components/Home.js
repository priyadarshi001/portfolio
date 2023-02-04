// import "../styles/Home.css";
import myImg from "../assets/Portfolio-noBG.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import DataObjectIcon from "@mui/icons-material/DataObject";

export default function Home() {
  return (
    <section id="Home">
      <div className="bg-darkBlue h-screen container flex flex-col-reverse justify-center items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-3xl font-bold text-center text-veryLightGray md:text-6xl md:text-left">
            Hi, I'm <br /> Rahul Priyadarshi
          </h1>
          <p className="max-w-sm text-center text-lg text-lightBlue md:text-left md:text-xl">
            React JS developer with a passion for learning and creating
          </p>
          <div className="space-x-4">
            <a
              href="https://www.linkedin.com/in/rahul-priyadarshi-1b2601a0/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="m-2 text-darkGreyishBlue hover:fill-veryLightGray" style={{ fontSize: 50 }} />
            </a>
            <a
              href="mailto:rahulpriyadarshi001@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon className="m-2 text-darkGreyishBlue hover:fill-veryLightGray" style={{ fontSize: 50 }} />
            </a>
            <a
              href="https://github.com/priyadarshi001"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="m-2 text-darkGreyishBlue hover:fill-veryLightGray" style={{ fontSize: 50 }} />
            </a>
            <a
              href="https://leetcode.com/priyadarshi_rahul/"
              target="_blank"
              rel="noreferrer"
            >
              <DataObjectIcon className="m-2 text-darkGreyishBlue hover:fill-veryLightGray" style={{ fontSize: 50 }} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={myImg} alt="myImg" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}