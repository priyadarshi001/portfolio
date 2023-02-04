import java from "../assets/skillImg/java.png"
import git from "../assets/skillImg/Git.png"
import html from "../assets/skillImg/HTML5.png"
import intelliJ from "../assets/skillImg/IntelliJ.png"
import css from "../assets/skillImg/css3.png"
import js from "../assets/skillImg/javascript.png"
import MUI from "../assets/skillImg/materialUI.png"
import npm from "../assets/skillImg/npm.png"
import react from "../assets/skillImg/React.png"
import tailwind from "../assets/skillImg/Tailwind_CSS.png"
import vsC from "../assets/skillImg/vsCode.png"

export default function SkillImg() {
  return (
    <>

      <img src={html} alt="html" className="w-16 h-16 m-2" />
      <img src={css} alt="css" className="w-16 h-16 m-2" />
      <img src={js} alt="js" className="w-16 h-16" />
      <img src={react} alt="react" className="w-16 h-16 m-2" />
      <img src={npm} alt="npm" className="w-16 h-16 m-2" />
      <img src={MUI} alt="MUI" className="w-16 h-16 m-2" />
      <img
        src={tailwind}
        alt="tailwind"
        className="w-16 h-16 m-2"
      />
      <img src={vsC} alt="vsC" className="w-16 h-16 m-2" />
      <img
        src={intelliJ}
        alt="intelliJ"
        className="w-16 h-16 m-2 object-cover"
      />
      <img src={git} alt="git" className="w-16 h-16 m-2 object-cover" />
      <img src={java} alt="java" className="w-16 h-16 m-2 object-cover" />
    </>
  );
}
