// src/components/Contact.js

import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative">

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="flex-1" />
        <div className="bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md">

            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                mvu21@gmu.edu
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+1 (571) 319-9518</p>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                SOCIALS
              </h2>
              <div className="mt-1">
                <FaGithub size={24}/>
                <FaLinkedin size={24}/>
                <FaYoutube size={24}/>
              </div>
            </div>

          </div>
        </div>
        <div className="flex-1" />
      </div>

    </section>
  );
}