// src/components/Contact.js

import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

{ }

export default function Contact() {
  return (
    <section id="contact" className="relative">

      <div className="container lg:w-1/2 px-5 py-10 mx-auto">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          <div className="bg-gray-800 relative flex lg:flex-row flex-col py-6 rounded shadow-md">

            <div className="md:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">mvu21@gmu.edu</a>
            </div>

            <div className="md:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                PHONE
              </h2>
              <p className="leading-relaxed">+1 (571) 319-9518</p>
            </div>

            <div className="md:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                SOCIALS
              </h2>
              <div className="mt-1 flex flex-wrap space-x-4">
                <FaGithub size={24} />
                <FaLinkedin size={24} />
                <FaYoutube size={24} />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}