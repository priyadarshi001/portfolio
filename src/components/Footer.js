import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
// import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="container flex flex-col mt-8 p-6 items-center mx-auto">
      <div className="">
        <a
          href="https://www.instagram.com/rahulpriyadarshi001/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon
            className="m-2 text-darkGreyishBlue hover:fill-veryLightGray"
            style={{ fontSize: 40 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-priyadarshi-1b2601a0/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className="m-2 text-darkGreyishBlue hover:fill-veryLightGray"
            style={{ fontSize: 40 }}
          />{" "}
        </a>
        <a
          href="https://github.com/priyadarshi001"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className="m-2 text-darkGreyishBlue hover:fill-veryLightGray"
            style={{ fontSize: 40 }}
          />
        </a>
        <a
          href="mailto:rahulpriyadarshi001@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon
            className="m-2 text-darkGreyishBlue hover:fill-veryLightGray"
            style={{ fontSize: 40 }}
          />
        </a>
      </div>
      <p className="text-lg font-semibold text-darkGreyishBlue">
        {" "}
        &copy; 2023 🧡 Rahul Priyadarshi
      </p>
    </div>
  );
}
