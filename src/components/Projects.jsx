import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from './data';
import Modal from './Modal'; // assuming Modal component is defined in a separate file

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

  return (
    <section className="flex flex-col items-center justify-center mt-32 lg:mt-96 pb-32 lg:pb-96" id="project-section">
      <h1 className="text-blue-500 font-bold text-4xl lg:text-5xl pb-9 pt-16 lg:pt-32">Portfolio</h1>
      <h1 className="font-mono text-xl lg:text-2xl text-center mb-20 lg:mb-40">
        <span role="img" aria-label="robot-emoji" className="text-4xl lg:text-5xl">🦾</span> Web developer portfolio showcasing creative and intuitive websites <span role="img" aria-label="robot-emoji" className="text-4xl lg:text-5xl">🦾</span>
      </h1>
      <div className="flex flex-col items-center w-full px-4">
        {projectsData.map((project) => (
          <div key={project.id} className="flex flex-col items-center justify-center mt-10 lg:flex-row lg:gap-16 md:flex-row md:gap-16 pb-7 w-full">
            <div className="grid grid-cols-2 gap-5 w-full p-4 sm:p-8 md:p-16 lg:w-1/2">
              {project.photos.map((photo, index) => (
                <div key={index} className="col-span-1">
                  <img
                    src={photo}
                    className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
                    onClick={() => openModal(photo)}
                    alt={`Project ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-5 p-6 lg:w-1/2 text-center lg:text-left">
              <div dangerouslySetInnerHTML={{ __html: project.info }} />
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
        ))}
      </div>
      <Modal imageSrc={selectedImage} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}

export default Projects;
