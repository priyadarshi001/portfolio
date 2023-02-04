import React from "react";
import SkillImg from "./SkillImg";
//import "../styles/Skill.css";

export default function Skills() {
  return (
    <section id="Skills">
      <div className="container flex flex-col mt-8 p-4 mx-auto space-x-6 space-y-12 md:space-y-0 md:flex-row">
        {/** Left Side */}
        <div className="flex flex-col space-y-12 md:w-3/5">
          <h2 className="max-w-sm text-4xl font-bold text-center text-veryLightGray md:text-left">
            Skill set
          </h2>
          <p className="max-w-lg text-center md:text-xl text-darkGreyishBlue md:text-left">
            React developer with proficiency in technologies such as{" "}
            <span className="text-paleRed">
              {" "}
              HTML, CSS, JavaScript, NPM, Webpack, Tailwind CSS and Material UI.
            </span>{" "}
            Strong skills in creating reusable components, responsive design,
            and state management with{" "}
            <span className="text-paleRed">State and Context API</span>.
            Knowledge of OS, OOPs, MVC, DBMS, and MySQL. Active on{" "}
            <span className="text-paleRed">Leetcode.</span> <br />
            Self-driven, result oriented, fast learner, and always
            seeking to improve. Stay up-to-date with the latest front-end
            development tools.
          </p>
        </div>
        {/** Right side */}
        <div className="hidden flex-wrap p-14 md:w-2/5 md:flex">
          <SkillImg />
        </div>
      </div>
    </section>
  );
}
