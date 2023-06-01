import { Link } from 'react-router-dom';
import { projectsData } from './projectData';

function Projects() {

  


  const projects = projectsData.map((project) => {
    return (
      <div key={project.id} className="flex flex-col items-center justify-center mt-10 lg:flex-row  lg:gap-32 md:flex-row md:gap-16 lg:justify-center lg:max-w-fit pb-7">
        <div className="carousel w-80 md:w-96">
          <div id={`slide1-${project.id}`} className="carousel-item relative w-full">
            <img src={project.photos.picone} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide4-${project.id}`} className="btn btn-circle">❮</a>
              <a href={`#slide2-${project.id}`} className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id={`slide2-${project.id}`} className="carousel-item relative w-full">
            <img src={project.photos.pictwo} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide1-${project.id}`} className="btn btn-circle">❮</a>
              <a href={`#slide3-${project.id}`} className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id={`slide3-${project.id}`} className="carousel-item relative w-full">
            <img src={project.photos.picthree} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#slide2-${project.id}`} className="btn btn-circle">❮</a>
              <a href={`#slide4-${project.id}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-gray-700 text-center w-96">{project.info}</p>
          <div className="flex flex-row gap-5 justify-center pt-5">
            <Link to={project.live} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-link cursor-pointer text-xl text-indigo-600">Live</button>
            </Link>
            <Link to={project.code} target="_blank" rel="noopener noreferrer">
              <button className="btn btn-link cursor-pointer text-black font-bold text-xl">Code</button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  
  return (
    <section className="flex flex-col  items-center justify-center mt-96 pb-96" id="project-section">
      <h1 className="text-blue-500 font-bold text-2xl">Portfolio</h1>
      <h1 className="font-sans text-center mb-40">
        <span role="img" aria-label="robot-emoji" className="text-xl">🦾</span> Web developer portfolio showcasing creative and intuitive websites <span role="img" aria-label="robot-emoji" className="text-xl">🦾</span>
      </h1>
      <div>
        {projects}
      </div>
    </section>
  );
  
  }
  
  export default Projects;


 