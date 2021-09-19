
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

function Project(props) {
  const project = props.project;
  return (
    <div className="sm:w-1/2 w-100 p-4 flex relative">
      <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900">
        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
          {project.subtitle}
        </h2>
        <h1 className="title-font text-lg font-medium text-white mb-3">
          {project.title}
        </h1>
        <p className="leading-relaxed text-left">{project.description}</p>
        <div className="flex pt-8">
          {project.demo && <a href={project.demo}
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Demo
          </a>}
          {project.code && <a href={project.code}
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Code
          </a>}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => <Project project={project} />)}
        </div>
      </div>
    </section>
  );
}