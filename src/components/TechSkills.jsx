import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const TechSkills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4  ">
     
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer ">
        <div className="bg-blue-600 rounded-full p-2">
          <FaHtml5 className="text-white text-3xl   "  />
        </div>
        <span className="text-blue-600 text-sm mt-2">HTML</span>
      </div>
      <div className="flex flex-col items-center  hover-effect transition-all cursor-pointer">
        <div className="bg-green-600 rounded-full p-2">
          <FaCss3 className="text-white text-3xl" />
        </div>
        <span className="text-green-600 text-sm mt-2">CSS</span>
      </div>
      <div className="flex flex-col items-center  hover-effect transition-all cursor-pointer ">
        <div className="bg-yellow-500 rounded-full p-2">
          <FaJs className="text-white text-3xl" />
        </div>
        <span className="text-yellow-500 text-sm mt-2">JavaScript</span>
      </div>
      <div className="flex flex-col items-center  hover-effect transition-all cursor-pointer ">
        <div className="bg-blue-500 rounded-full p-2">
          <FaReact className="text-white text-3xl" />
        </div>
        <span className="text-blue-600 text-sm mt-2">React</span>
      </div>
      <div className="flex flex-col items-center  hover-effect transition-all cursor-pointer ">
        <div className="bg-teal-500 rounded-full p-2">
          <SiTailwindcss className="text-white text-3xl" />
        </div>
        <span className="text-green-600 font-b text-sm mt-2">Tailwind CSS</span>
      </div>
    </div>
  );
};

export default TechSkills;
