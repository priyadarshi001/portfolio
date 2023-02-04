// import "../styles/About.css";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AgricultureIcon from "@mui/icons-material/Agriculture";

export default function About() {
  return (
    <section id="About">
      <div className="container flex flex-col p-4 mx-auto space-x-6 space-y-12 md:space-y-0 md:flex-row">
        {/** Left Side */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center text-veryLightGray md:text-left">
            About me
          </h2>
          <p className="max-w-md text-center md:text-xl text-darkGreyishBlue md:text-left">
            An aspiring <span className="text-paleRed"> React Developer </span>
            with a passion for learning and creating, formerly an ex-UPSC/RBI
            aspirant. My objective is to construct a high-performing, versatile,
            and user-friendly website that effectively conveys information to
            its users.
          </p>
        </div>
        {/** Right side */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <div className="flex flex-col md:text-xl">
            <h3 className="text-lg text-darkGreyishBlue mb-2 pl-2">
              Education:
            </h3>
            <div className="flex items-center text-lightBlue">
              <div className="p-2 pl-2">
                <h4 className="text-paleRed">IIT Roorkee - IN </h4>
                <h5>
                  B. Tech in Metallurgical and Material Engineering 2014-2018
                </h5>
                <h5>CGPA: 6.7 </h5>
              </div>
              <div className="flex items-center">
                <div>
                  <h4>Delhi Public School, B S City - IN </h4>
                  <h5>12th 2011-2013</h5>
                  <h5 className="text-paleRed">93.2% </h5>
                </div>
              </div>
            </div>
          </div>

          {/** Interests */}
          <div className="flex flex-col justify-between text-darkGreyishBlue pl-4">
            <h3 className="text-lg text-darkGreyishBlue font-medium mb-2">
              Interests:
            </h3>
            <div className="flex justify-between">
              <div className="flex">
                <SmartToyIcon className="mr-1" />
                <h4>Anime</h4>
              </div>
              <div className="flex">
                <OutdoorGrillIcon className="mr-1" />
                <h4>Cooking</h4>
              </div>
              <div className="flex">
                <FitnessCenterIcon className="mr-1" />
                <h4>Gym</h4>
              </div>
              <div className="flex">
                <AgricultureIcon className="mr-1" />
                <h4>Aquaponics</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
