export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 items-center">

        <div className="flex-1" />
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Minh Vu
          </h1>
          <h2 className="subtitle-font sm:text-xl text-xl mb-4 font-medium text-white">
            Software Engineer
          </h2>
          <p className="mb-8 leading-relaxed">
            Always in search of new technologies to learn. Currently interested in Game Developement and Mobile App Development.
            Interested in Nerf Wars, 3D Printing, and Photography.
          </p>
          <div className="flex justify-center">
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
        <div className="flex-1" />
      </div>
    </section>
  );
}