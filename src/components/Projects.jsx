import { Link } from 'react-router-dom';
import projectsData from './data';

function Projects() {
  const projects = projectsData.map((project) => {
    return (
      <div key={project.id} className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-16 md:flex-row md:gap-16 pb-7 w-full">
        <div className="grid grid-cols-2 gap-5 w-full p-4 sm:p-8 md:p-16 lg:w-1/2">
          <div className="col-span-2">
            <img src={project.photos.pictone} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.picttwo} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.pictthree} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.pictfour} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.pictfive} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.pictsix} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.pictseven} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.picteight} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
          <div className="col-span-1">
            <img src={project.photos.pictnine} className="w-full h-auto shadow-xl rounded-xl hover:scale-105 transition-all duration-300" />
          </div>
        </div>
        <div className="mt-5 p-6 lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-700 text-xl">{project.info}</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-5">
            <Link to={project.live} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline btn-primary cursor-pointer">Live</button>
            </Link>
            <Link to={project.code} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-outline cursor-pointer">Code</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="flex flex-col items-center justify-center mt-32 lg:mt-96 pb-32 lg:pb-96" id="project-section">
      <h1 className="text-blue-500 font-bold text-4xl lg:text-5xl pb-9 pt-16 lg:pt-32">Portfolio</h1>
      <h1 className="font-mono text-xl lg:text-2xl text-center mb-20 lg:mb-40">
        <span role="img" aria-label="robot-emoji" className="text-4xl lg:text-5xl">🦾</span> Web developer portfolio showcasing creative and intuitive websites <span role="img" aria-label="robot-emoji" className="text-4xl lg:text-5xl">🦾</span>
      </h1>
      <div className="flex flex-col items-center w-full px-4">
        {projects}
      </div>
    </section>
  );
}

export default Projects;
