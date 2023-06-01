import desk from "./image/desk.jpg"
import logo from "./image/witelogo.png"
function Aboutme (){
    return(
        <section className=" flex flex-row gap-4 mt-96 relative pt-52 pb-96 md:mr-64 lg:mr-0 " id="about-section" >
          <div>
            <div className=" w-52 -ml-40  relative md:w-52  md:-ml-40 lg:w-80 lg:-ml-96  ">
                <img src={desk} alt="" className="rounded-2xl" />
                
            </div>
            <div className="absolute w-16 -ml-2 -mt-14 md:w-24 md:-mt-20 md:-ml-9 lg:-mt-32   lg:-ml-48 lg:w-40   ">
            <img src={logo} alt="" className="rounded-full "/>
            </div>
          </div>

          <div className="flex flex-col mt-36 -ml-40 w-96 absolute md:mt-0 md:ml-20 lg:ml-0 pb-32 " >
            <h1 className="text-blue-500 font-bold text-xl ">About me</h1>
            <h1 className="font-bold text-xl">Passionate and dedicated Front-End and Web Developer based in Tbilisi, Georgia 📍.</h1>
            <p className=" md:w-96 pt-5 ">I am that rare case, or maybe not, where I got into tech from a completely different field. 
                After studying at Tbilisi State University for six years, I realized that medicine was not my passion.
                 While I loved the science and theory behind it, practicing medicine wasn't for me. I had to 
                 choose between continuing to do something that didn't fulfill me or pursuing something that did. 
                 At the age of 25, I decided to take the leap and pursue programming, which had always
                 interested me. I love the process of creation, and programming is all about creation.</p>
          </div>


        </section>
    )
}

export default Aboutme
