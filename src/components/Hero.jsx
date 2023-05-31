import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import picture from './image/merab.jpg';
import TechSkills from "./TechSkills";
function Hero() {
  return (
    
    <section className="mt-60 flex flex-row justify-center items-center   "  id="home-section" >
      <div className="flex flex-col lg:mr-16 ">
        <div className="w-min flex pl-5">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">Front-end Webdeveloper </h1>
          <div className="-ml-20 md:-ml-28 lg:-ml-40 w-min text-4xl md:text-6xl lg:text-7xl animate-pulse">🌐</div>
        </div>
        <div className="w-72 md:w-80 lg:w-86 mt-9 pl-5">
          <p>
            I'm a front-end and web developer <span className="font-bold">Merab Todua</span> based in <span className="font-bold">Tbilisi, Georgia</span> 📍.
            I love coding and creating stunning web solutions that leave a lasting impression.
          </p>
          <div className="flex gap-4 transition-all">
            <Link to="https://www.linkedin.com/in/merab-todua-682965254/" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin className="mt-5 text-4xl cursor-pointer hover-effect" />
            </Link>
            <Link to="https://github.com/topics/sun?l=css" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="mt-5 text-4xl cursor-pointer hover-effect" />
            </Link>
          </div>

          <div className="w-max mt-16 ">
             <TechSkills/>
          </div>
        </div>
      </div>

      <div className="-mt-24 w-min animate-pulse ml-0 ">
        <div className="w-24 mask mask-hexagon md:w-28 lg:w-52 ">
          <img src={picture} alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
