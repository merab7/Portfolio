import React, { useState } from 'react';
import picture from './image/mt.png';
import { Link as ScrollLink } from 'react-scroll';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="fixed top-0 right-0 left-0 p-5 flex flex-row justify-between  z-50  "  >
      <div className="flex" >
      <ScrollLink to="main-section" smooth={true} duration={500}>
        <img src={picture} alt="" className="w-24 -ml-4 mt-1 cursor-pointer" />
        </ScrollLink>
      </div>

      <div>
        <div className="dropdown dropdown-end lg:hidden opacity-1 ">
          <label tabIndex={0} className="btn m-1 text-white bg-black" onClick={toggleDropdown}>
            Menu
          </label>
          <ul
            tabIndex={0}
            className={isOpen ? 'dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40  ' : 'hidden'}
          >
             <li>
             <ScrollLink to="main-section" smooth={true} duration={500}>
              <button>Home</button>
              </ScrollLink>
            </li>

            <li>
            <ScrollLink to="about-section" smooth={true} duration={500}>
              <button>About me</button>
              </ScrollLink>
            </li>
            <li>
            <ScrollLink to="project-section" smooth={true} duration={500}>
              <button>Projects</button>
              </ScrollLink>
            </li>
            <li>
            <ScrollLink to="contact-section" smooth={true} duration={500}>
              <button>Contact</button>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex flex-row gap-5  font-bold pr-5 pt-5 text-lg transition-colors ">
      <ScrollLink to="main-section" smooth={true} duration={500}>
       <button className="btn btn-outline  bg-white cursor-pointer ">Home</button>
       </ScrollLink>
       <ScrollLink to="about-section" smooth={true} duration={500}>
        <button className="btn btn-outline  bg-white cursor-pointer ">About me</button>
        </ScrollLink>
        <ScrollLink to="project-section" smooth={true} duration={500}>
        <button className="btn btn-outline  bg-white cursor-pointer ">Projects</button>
        </ScrollLink>
        <ScrollLink to="contact-section" smooth={true} duration={500}>
        <button className="btn btn-outline  bg-white cursor-pointer ">Contact</button>
        </ScrollLink>
      </div>
    </section>
  );
}

export default Header;