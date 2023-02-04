import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // provides css too but need to import
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CodeIcon from "@mui/icons-material/Code";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BeenhereIcon from "@mui/icons-material/Beenhere";

export default function Experiences() {
  return (
    <>
      <div className="mt-8 p-4 mx-auto items-center container" id="Experiences">
        <h2 className="max-w-md mb-8 text-4xl font-bold text-center text-veryLightGray md:text-left">
          Experiences
        </h2>
        <div>
          <VerticalTimeline className="text-darkGreyishBlue">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2014 - 2017"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title max-w-sm text-lg font-bold text-center bg-white">
                Event Management in College Fests
              </h3>
              <p
                className="bg-white max-w-lg text-left font-medium md:text-xl text-darkGreyishBlue
              "
              >
                <BeenhereIcon fontSize="small" color="success" /> Cultural
                Councillor of my hostel where I effectively managed and executed
                several events, including hostel sports and the annual function,
                demonstrating my leadership and organizational skills.
                <br />
                <BeenhereIcon fontSize="small" color="success" />
                Coordinator in Cognizant Tech Fest - responsible for handling
                hospitality of different participants from various colleges{" "}
                <br />
                <BeenhereIcon fontSize="small" color="success" />
                Guard Of Honour - An active member for 1 year. Part of Guard of
                Honour group to represent the college on Republic Day and
                Independence Day.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2017 - July 2017"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<WorkOutlineIcon />}
            >
              <h3 className="vertical-timeline-element-title max-w-sm text-xl font-bold text-center bg-white">
                Business Development Intern
              </h3>
              <p className="bg-white max-w-lg text-left font-medium md:text-xl text-darkGreyishBlue">
                <BeenhereIcon fontSize="small" color="success" />
                Worked on an early-age startup - Log 9 Materials - a
                nano-technology based R&D startup working primarily on
                Graphene-based products. <br />
                <BeenhereIcon fontSize="small" color="success" />
                Assisted technical research team in projects on efficient
                batteries and water filtration devices. <br />
                <BeenhereIcon fontSize="small" color="success" />
                Managed shipments of company's PPuF product (cigarette air
                filtration device) through portal.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018 - 2022"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<MenuBookIcon />}
            >
              <h3 className="vertical-timeline-element-title max-w-sm text-xl font-bold text-center bg-white">
                UPSC/RBI Aspirant
              </h3>
              <p className="bg-white max-w-lg text-left font-medium md:text-xl text-darkGreyishBlue">
                <BeenhereIcon fontSize="small" color="success" />
                As an ambitious individual, I took the risk of giving the UPSC &
                RBI exams, demonstrating my perseverance by successfully
                completing mains once. This journey not only tested my mettle
                but also sharpened my skills in time management, patience,
                dedication, and mental stress management, enabling me to tackle
                future challenges with confidence. These experiences have honed
                my abilities and solidified my resolve to continue growing as a
                well-rounded individual.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Oct 2022 - Present"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<CodeIcon />}
            >
              <h3 className="vertical-timeline-element-title max-w-sm text-xl font-bold text-center bg-white">
                Self-Taught React Developer
              </h3>
              <p className="bg-white max-w-lg text-left font-medium md:text-xl text-darkGreyishBlue">
                <BeenhereIcon fontSize="small" color="success" />
                After taking a break from UPSC, I shifted my focus to web
                development and fell in love with React. Through self-study and
                small projects, I've gained a strong understanding of React and
                associated technologies such as HTML, CSS, JavaScript, Tailwind
                CSS. Now, I am eager to take on full-time opportunities in the
                field as a React developer.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              icon={<AddCircleOutlineIcon />}
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              date="Present"
            >
              <h3 className="vertical-timeline-element-title max-w-sm text-xl font-bold text-center bg-white">
                Pro Developer In Making...
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

// match the lineColor similar to home page
// className used in verticalTimelineElement should be same as provided in their css style
