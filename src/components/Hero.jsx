import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import picture from './image/merab.jpg';
import TechSkills from "./TechSkills";

function Hero() {
  return (
    <section className="mt-32 flex flex-col lg:flex-row justify-center items-center lg:mt-60" id="home-section">
      <div className="flex flex-col items-center lg:items-start lg:mr-16">
        <div className="flex items-center justify-center lg:justify-start w-full pl-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">Python Developer</h1>
          <div className="ml-2 md:ml-4 lg:ml-8 text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-pulse">🌐</div>
        </div>
        <div className="mt-6 w-full lg:w-auto pl-5 text-center lg:text-left">
          <p className="text-base md:text-lg lg:text-xl">
            I'm a Python developer <span className="font-bold">Merab Todua</span> based in <span className="font-bold">Tbilisi, Georgia</span> 📍.
            
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-5">
            <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl cursor-pointer hover-effect" />
            </Link>
            <Link to="https://github.com/merab7" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="text-2xl md:text-3xl lg:text-4xl cursor-pointer hover-effect" />
            </Link>
          </div>
          <div className="mt-8 lg:mt-12">
            <TechSkills />
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 animate-pulse flex justify-center lg:block">
        <div className="w-24 md:w-32 lg:w-48 xl:w-64 mask mask-hexagon">
          <img src={picture} alt="Profile Picture" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
