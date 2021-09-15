export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 justify-center">
        <div className="md:w-2/3 flex flex-col items-start text-left mb-16">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Minh Vu
          </h1>
          <h2 className="subtitle-font sm:text-xl text-xl mb-4 font-medium text-white">
            Software Engineer
          </h2>
          <p className="mb-8 leading-relaxed">
            Attending <b className="text-gray-300">George Mason University</b> for a BS in Computer Science.
            I'm currently learning about Game Development and Mobile App Development in my free time.
            Some of my hobbies include in Nerf Wars, 3D Printing, and Photography.
          </p>
          <div className="flex">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}