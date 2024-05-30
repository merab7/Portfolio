import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from './data';

const Modal = ({ imageSrc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75" onClick={onClose}>
      <div className="relative">
        <button className="absolute top-2 right-2 text-white text-2xl focus:outline-none" onClick={onClose}>&times;</button>
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
    <div key={project.id} className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:gap-16 md:flex-row md:gap-16 pb-7 w-full">
      <div className="grid grid-cols-2 gap-5 w-full p-4 sm:p-8 md:p-16 lg:w-1/2">
        {[project.photos.pictone, project.photos.picttwo, project.photos.pictthree, project.photos.pictfour, project.photos.pictfive, project.photos.pictsix, project.photos.pictseven, project.photos.picteight, project.photos.pictnine].map((image, index) => (
          <div key={index} className="col-span-1">
            <img
              src={image}
              className="w-full h-auto shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => openModal(image)}
              alt={`Project Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="mt-5 p-6 lg:w-1/2 text-center lg:text-left">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">{project.name}</h2>
          <div className="text-gray-700">
            <h3 className="text-lg lg:text-xl font-semibold">{project.description}</h3>
            <div className="mt-4">
              <h4 className="text-base lg:text-lg font-semibold">Project Overview:</h4>
              <p>{project.overview}</p>
            </div>
            <div className="mt-4">
              <h4 className="text-base lg:text-lg font-semibold">Key Features:</h4>
              <ul className="list-disc pl-6">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.title}:</strong> {feature.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-base lg:text-lg font-semibold">Technologies Used:</h4>
              <ul className="list-disc pl-6">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-base lg:text-lg font-semibold">Achievements:</h4>
              <ul className="list-disc pl-6">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-5">
          <Link to={project.live} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary cursor-pointer">Live Demo</button>
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
      <h1 className="font-mono text-lg lg:text-xl text-center mb-20 lg:mb-40">
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
