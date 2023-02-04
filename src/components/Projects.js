import ProjectItem from "../components/ProjectItem";
//import "../styles/Projects.css"
import MM from "../assets/Movie-Mania.png";
import CR from "../assets/Chat-Room.png";
import YY from "../assets/YumYard.png";
import CS from "../assets/coming-soon.png";

export default function Projects() {
  return (
    <>
      <section id="Projects">
        <div className="container flex flex-col p-4 mt-8 mx-auto space-x-6 space-y-12 md:space-y-0 ">
          <h2
            className="max-w-md
          text-4xl
          font-bold
          text-center
          mb-8
          text-veryLightGray
          md:text-left"
          >
            My Projects
          </h2>
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-x-2 md:space-y-0 md:flex-row">
            <ProjectItem name="Yum-Yard" image={YY} />
            <ProjectItem name="Movie-Mania" image={MM} />
            <ProjectItem name="Chat-Room" image={CR} />
            <ProjectItem
              name="Coming Soon"
              image={CS}
            />
          </div>
        </div>
      </section>
    </>
  );
}

//

//flex-col flex-wrap  justify-between items-center md:flex
