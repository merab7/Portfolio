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
    <div key={project.id} className="flex flex-col md:flex-row md:space-x-8 items-center justify-center mt-10 w-full max-w-screen-lg mx-auto">
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6">
          {project.photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                className="w-full h-auto sm:h-full object-cover shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => openModal(photo)}
                alt={`Project ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-0">
        <div dangerouslySetInnerHTML={{ __html: project.info }} />
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-5">
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
    <section className="flex flex-col items-center justify-center mt-16 pb-16" id="project-section">
      <h1 className="text-blue-500 font-bold text-3xl lg:text-4xl pb-8 pt-16 lg:pt-24">Portfolio</h1>
      <h1 className="font-mono text-lg lg:text-xl text-center mb-12 lg:mb-20">
        <span role="img" aria-label="robot-emoji" className="text-2xl lg:text-3xl">🦾</span> Web developer portfolio showcasing creative and intuitive websites <span role="img" aria-label="robot-emoji" className="text-2xl lg:text-3xl">🦾</span>
      </h1>
      <div className="flex flex-col items-center w-full px-4">
        {projects}
      </div>
      <Modal imageSrc={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Projects;
