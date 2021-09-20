import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

function Skill(props) {
  const skill = props.skill;
  return (
    <div key={skill} className="p-2">
      <div className="bg-gray-800 rounded flex p-4 h-full items-center">
        {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
        <span className="title-font font-medium text-white">
          {skill}
        </span>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap md:w-2/3 sm:mx-auto sm:mb-2 -mx-2 justify-center">
          {skills.map((skill) => <Skill skill={skill} />)}
        </div>
      </div>
    </section>
  );
}