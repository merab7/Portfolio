import { useRef } from "react"
import emailjs from "@emailjs/browser";


function Contact (){

    const refForm=useRef()

    const sendEmail=(e)=>{
        e.preventDefault()
       emailjs.sendForm(
            'service_f7qn9p9',
            'template_4obpmcd',
            refForm.current,
            'vkEiJne3CilhjHir1'
           )
           .then(
            () => {
              alert("Message successfully sent!");
              window.location.reload(false);
            },
            () => {
              alert("Failed to send the message, please try again");
            }
          );
      };
    
      return (
        <section className="mt-40 mb-40 md:ml-0 w-96 pt-32 " id="contact-section" >
  <div className="pb-16">
    <h1 className="pb-5 pl-5 text-indigo-600 font-bold text-xl">Contact me</h1>
    <p className="pl-5 text-gray-800 md:w-96">
      Contact me for offers or questions using the form below.
      I look forward to hearing from you and assisting you with any offers or inquiries you may have!
    </p>
  </div>
  <div>
    <form ref={refForm} onSubmit={sendEmail}>
      <ul>
        <div className="flex gap-0.5 mb-2 ml-1">
          <li>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="bg-gray-100 pl-1 pt-2 pb-2 border-solid w-48 border border-gray-300 md:pt-5 md:pb-5"
            />
          </li>
          <li>
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="bg-gray-100 pl-1 pr-5  pt-2 pb-2 border-solid w-48 border border-gray-300 md:pt-5 md:pb-5"
            />
          </li>
        </div>
        <div className="w-96">
          <li>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-96 bg-gray-100 pt-2 pb-2 mb-2 ml-1 pl-2 border-solid border border-gray-300 md:pt-5 md:pb-5"
            />
          </li>
          <li>
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full bg-gray-100 ml-1 pt-10 pb-5 pl-2 resize-none border-solid border border-gray-300  "
            ></textarea>
          </li>
        </div>
        <li>
          <input
            type="submit"
            value="Send"
            className="ml-2 mt-1 pt-2 pl-4 pr-4 pb-2 bg-indigo-600 text-white font-bold hover:bg-indigo-700 border-solid border border-indigo-600"
          />
        </li>
      </ul>
    </form>
  </div>
  <div >
  </div>
</section>

      );
    }
    
    export default Contact;