function Aboutme() {
  return (
    <section
      className="flex  flex-col gap-4 mt-36 md:mt-48 lg:mt-96 pt-12 pb-24 md:pb-48 lg:pb-96 px-4 md:px-20 lg:px-40"
      id="about-section"
    >
      <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h1 className="text-blue-500 font-bold text-4xl pb-4">About me</h1>
        <h2 className="font-bold text-xl pb-4">
         Python Developer based in Tbilisi, Georgia 📍.
        </h2>

        <p className="pt-5 leading-relaxed">
       My name is Merab Todua, and I am a Python developer with a passion for web development and data analysis. I enjoy working in this field and continually strive to enhance my skills to stay updated with the latest advancements in technology. One of my proudest accomplishments is building 
       jerseys.ge a fully functional e-commerce platform developed from scratch for a real business. This project demonstrates my ability to create dynamic, user-driven websites with a focus on functionality, scalability, and user experience.
       I am confident that my ongoing dedication to learning and growth will lead to continued success in this ever-evolving industry. If we work together, you can count on me to see projects through to the end while maintaining high standards. I welcome the opportunity to connect and collaborate on exciting projects!
        </p>
      </div>
    </section>
  );
}

export default Aboutme;
