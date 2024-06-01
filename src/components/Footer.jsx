import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
 
 function Footer (){
    return(
<footer className="  md:mr-0 footer footer-center p-10 bg-indigo-200    text-base-content rounded ">
  <div className="grid grid-flow-col gap-4">
  <ScrollLink to="main-section" smooth={true} duration={500}>
  <button >Home</button>
 </ScrollLink>
 <ScrollLink to="about-section" smooth={true} duration={500}>
  <button >About me</button>
   </ScrollLink>
   <ScrollLink to="project-section" smooth={true} duration={500}>
   <button>Projects</button>
  </ScrollLink>
  <ScrollLink to="contact-section" smooth={true} duration={500}>
   <button>Contact</button>
  </ScrollLink>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
    <Link to="www.linkedin.com/in/merab-todua-a64116311" target="_blank" rel="noopener noreferrer" >
            <FaLinkedin className="mt-5 text-4xl cursor-pointer hover-effect" />
   </Link>
   <Link to="https://github.com/topics/sun?l=css" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="mt-5 text-4xl cursor-pointer hover-effect" />
</Link>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved </p>
  </div>
</footer>

    )
 }

 export default Footer