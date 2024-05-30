import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import picture from './image/merab.jpg';
import TechSkills from "./TechSkills";

function Hero() {
  return (
    <section className="mt-16 flex flex-col lg:flex-row justify-center items-center lg:mt-60" id="home-section">
      <div className="flex flex-col items-center lg:items-start lg:mr-16">
        <div className="flex items-center justify-center lg:justify-start w-full pl-5">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">Python Developer</h1>
          <div className="ml-2 md:ml-4 lg:ml-8 text-4xl md:text-6xl lg:text-7xl animate-pulse">🌐</div>
        </div>
        <div className="mt-6 w-72 md:w-80 lg:w-96 pl-5 text-center lg:text-left">
          <p>
            I'm a Python developer <span className="font-bold">Merab Todua</span> based in <span className="font-bold">Tbilisi, Georgia</span> 📍.
            I love coding.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-5">
            <Link to="https://www.linkedin.com/in/merab-todua-682965254/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-4xl cursor-pointer hover-effect" />
            </Link>
            <Link to="https://github.com/topics/sun?l=css" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="text-4xl cursor-pointer hover-effect" />
            </Link>
          </div>
          <div className="mt-10 lg:mt-16">
            <TechSkills />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 animate-pulse flex justify-center lg:block">
        <div className="w-24 mask mask-hexagon md:w-28 lg:w-52">
          <img src={picture} alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
