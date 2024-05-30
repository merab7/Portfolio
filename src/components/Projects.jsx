import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from './data';

const Modal = ({ imageSrc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={onClose}>
      <div className="relative">
        <button className="absolute top-2 right-2 text-white text-2xl" onClick={onClose}>&times;</button>
        <img src={imageSrc} alt="Enlarged" className="max-w-screen-lg max-h-screen-lg" />
      </div>
    </div>
  );
};

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    if (selectedImage === imageSrc && isModalOpen) {
      setIsModalOpen(false);
      setSelectedImage(null);
    } else {
      setSelectedImage(imageSrc);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const projects = projectsData.map((project) => (
    <div key={project.id} className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-16 md:flex-row md:gap-16 pb-7 w-full">
      <div className="grid grid-cols-2 gap-5 w-full p-4 sm:p-8 md:p-16 lg:w-1/2">
        <div className="col-span-2">
          <img
            src={project.photos.pictone}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictone)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.picttwo}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.picttwo)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.pictthree}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictthree)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.pictfour}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictfour)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.pictfive}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictfive)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.pictsix}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictsix)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.pictseven}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictseven)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.picteight}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.picteight)}
          />
        </div>
        <div className="col-span-1">
          <img
            src={project.photos.pictnine}
            className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => openModal(project.photos.pictnine)}
          />
        </div>
      </div>
<div className="mt-5 p-6 lg:w-1/2 text-center lg:text-left">
  <div>
    <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
    <p className="text-gray-700">{project.info}</p>
  </div>
  <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-5">
    <Link to={project.live} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-outline btn-primary cursor-pointer">Live Demo</button>
    </Link>
    <Link to={project.code} target="_blank" rel="noopener noreferrer">
      <button className="btn btn-outline cursor-pointer">View Code</button>
    </Link>
  </div>
</div>
    </div>
  ));

  return (
    <section className="flex flex-col items-center justify-center mt-32 lg:mt-96 pb-32 lg:pb-96" id="project-section">
      <h1 className="text-blue-500 font-bold text-4xl lg:text-5xl pb-9 pt-16 lg:pt-32">Portfolio</h1>
      <h1 className="font-mono text-xl lg:text-2xl text-center mb-20 lg:mb-40">
        <span role="img" aria-label="robot-emoji" className="text-4xl lg:text-5xl">🦾</span> Web developer portfolio showcasing creative and intuitive websites <span role="img" aria-label="robot-emoji" className="text-4xl lg:text-5xl">🦾</span>
      </h1>
      <div className="flex flex-col items-center w-full px-4">
        {projects}
      </div>
      <Modal imageSrc={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Projects;
