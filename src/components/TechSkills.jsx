import React from 'react';
import { FaPython, FaDatabase, FaServer, FaHtml5, FaCss3Alt, FaBootstrap, FaJs } from 'react-icons/fa';
import { SiDjango, SiMysql, SiFastapi, SiTailwindcss } from 'react-icons/si';

const TechSkills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-blue-600 rounded-full p-2">
          <FaPython className="text-white text-3xl" />
        </div>
        <span className="text-blue-600 text-sm mt-2">Python</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-gray-900 rounded-full p-2">
          <SiDjango className="text-white text-3xl" />
        </div>
        <span className="text-gray-900 text-sm mt-2">Django</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-blue-500 rounded-full p-2">
          <SiMysql className="text-white text-3xl" />
        </div>
        <span className="text-blue-500 text-sm mt-2">MySQL</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-green-600 rounded-full p-2">
          <SiFastapi className="text-white text-3xl" />
        </div>
        <span className="text-green-600 text-sm mt-2">FastAPI</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-red-500 rounded-full p-2">
          <FaHtml5 className="text-white text-3xl" />
        </div>
        <span className="text-red-500 text-sm mt-2">HTML</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-blue-600 rounded-full p-2">
          <FaCss3Alt className="text-white text-3xl" />
        </div>
        <span className="text-blue-600 text-sm mt-2">CSS</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-teal-500 rounded-full p-2">
          <SiTailwindcss className="text-white text-3xl" />
        </div>
        <span className="text-teal-500 text-sm mt-2">Tailwind CSS</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-purple-600 rounded-full p-2">
          <FaBootstrap className="text-white text-3xl" />
        </div>
        <span className="text-purple-600 text-sm mt-2">Bootstrap</span>
      </div>
      <div className="flex flex-col items-center hover-effect transition-all cursor-pointer">
        <div className="bg-yellow-500 rounded-full p-2">
          <FaJs className="text-white text-3xl" />
        </div>
        <span className="text-yellow-500 text-sm mt-2">JavaScript</span>
      </div>
    </div>
  );
};

export default TechSkills;
