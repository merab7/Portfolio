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
        My name is Merab Todua, and I am a Python developer. I love and enjoy this work very much. I dedicate a significant portion of my time every day to developing in this field and never stop; I am always in the process of learning because there is so much to learn, and I believe this topic is inexhaustible, and coding has a very bright future ahead.

Although I didn't start coding from childhood and transitioned into this field from a different one (medicine), I am certain that the consistent effort I put into this work every day for quite some time now makes me a competitive individual with great potential for development.

If you decide to work with me, I assure you that whatever I undertake, I will see it through to the end and achieve the best possible result.
        </p>
      </div>
    </section>
  );
}

export default Aboutme;
