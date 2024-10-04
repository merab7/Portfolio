import ecom1 from "./appic/ecom1.png";
import ecom2 from "./appic/ecom2.png";
import ecom3 from "./appic/ecom3.png";
import ecom4 from "./appic/ecom4.png";
import ecom5 from "./appic/ecom5.png";
import ecom6 from "./appic/ecom6.png";
import ecom7 from "./appic/ecom7.png";
import ecom8 from "./appic/ecom8.png";
import ecom9 from "./appic/ecom9.png";
import film1 from "./appic/film1.png";
import film2 from "./appic/film2.png";
import film3 from "./appic/film3.png";
import film4 from "./appic/film4.png";
import film5 from "./appic/film5.png";
import film6 from "./appic/film6.png";
import film7 from "./appic/film7.png";
import film8 from "./appic/film8.png";
import film9 from "./appic/film9.png";

const projectsData = [
  {
    name: "JerseyEcom",
    info: `<div className="p-6 bg-white rounded-lg shadow-md">
    <strong className="text-5xl font-bold mb-6">Project Overview</strong>
    <div className="text-gray-800">
      <h3 className="text-2xl font-semibold mb-4">E-Commerce Site for Football Jerseys</h3>
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Project Overview:</h4>
        <p className="text-base leading-relaxed">Developed a fully functional e-commerce site using Django, specializing in football jerseys. The site features robust user authentication, profile management, and admin capabilities.</p>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc pl-8 space-y-4">
          <li>
            <strong className="text-lg">User Experience:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Browse & Purchase: Users can explore and buy jerseys as guests or registered users.</li>
              <li>Secure Authentication: Implemented Django-based system with email verification.</li>
              <li>Profile Management: Users can view order history, track orders, and update shipping/billing info.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Admin Capabilities:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Product Management: Admins can easily upload and manage products, sizes, and pricing using Django models.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Order Processing:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Seamless Checkout: Streamlined process with email confirmations.</li>
              <li>Order Notifications: Users receive email updates on order status.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Technologies Used:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Backend: Django (authentication, email integration)</li>
              <li>Frontend: HTML, CSS, JavaScript</li>
              <li>Database Management: Handled via Django models</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Achievements:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Built a secure, user-friendly e-commerce platform from scratch.</li>
              <li>Developed an intuitive admin interface for efficient product management.</li>
              <li>Implemented a complete order processing system with real-time email notifications.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
    photos: [ ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7, ecom8, ecom9],
    live: "https://jerseys.ge/",
    code: "https://github.com/merab7/kharikha_trans",
    id: "0",
  },
  {
    name: "JerseyEcom",
    info: `<div className="p-6 bg-white rounded-lg shadow-md">
    <strong className="text-5xl font-bold mb-6">Project Overview</strong>
    <div className="text-gray-800">
      <h3 className="text-2xl font-semibold mb-4">Film Search and Sharing Platform</h3>
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Project Overview:</h4>
        <p className="text-base leading-relaxed">Developed a film search and sharing platform integrating with an API, using Django. Users can register, search for films, save favorites, and interact with each other's posts.</p>
      </div>
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Key Features:</h4>
        <ul className="list-disc pl-8 space-y-4">
          <li>
            <strong className="text-lg">User Registration & Authentication:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Secure user registration and login system.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Film Search:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Integration with external API for film search functionality.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Profile Management:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Users can manage their profiles and save favorite films.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Social Features:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Users can post film reviews, top 10 lists, and interact with each other through comments and likes.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Ranking System:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Implemented a flexible ranking system for top 10 lists.</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Technologies Used:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Backend: Django (authentication, API integration)</li>
              <li>Frontend: HTML, CSS, JavaScript</li>
              <li>Database Management: Handled via Django models</li>
            </ul>
          </li>
          <li>
            <strong className="text-lg">Achievements:</strong>
            <ul className="list-disc pl-8 mt-2 space-y-2">
              <li>Developed a comprehensive film platform with social features.</li>
              <li>Implemented a ranking system for user-generated content.</li>
              <li>Integrated external API seamlessly for film search functionality.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  `,
    photos: [ film1, film2, film3, film4, film5, film6, film7, film8, film9],
    live: "https://myfilms.up.railway.app/",
    code: "https://github.com/merab7/MY_FILMS.git",
    id: "0",
  },
];


export default projectsData;
