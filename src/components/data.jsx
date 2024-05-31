import ecom1 from "./appic/ecom1.png";
import ecom2 from "./appic/ecom2.png";
import ecom3 from "./appic/ecom3.png";
import ecom4 from "./appic/ecom4.png";
import ecom5 from "./appic/ecom5.png";
import ecom6 from "./appic/ecom6.png";
import ecom7 from "./appic/ecom7.png";
import ecom8 from "./appic/ecom8.png";
import ecom9 from "./appic/ecom9.png";

const projectsData = [
  {
    name: "JerseyEcom",
    info: `<div>
      <h2 className="text-2xl font-bold mb-3">Project Overview</h2>
      <div className="text-gray-700">
        <h3 className="text-xl font-semibold">E-Commerce Site for Football Jerseys</h3>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Project Overview:</h4>
          <p>Developed a fully functional e-commerce site using Django, specializing in football jerseys. The site features robust user authentication, profile management, and admin capabilities.</p>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Key Features:</h4>
          <ul className="list-disc pl-6">
            <li>
              <strong>User Experience:</strong>
              <ul className="list-disc pl-6">
                <li>Browse & Purchase: Users can explore and buy jerseys as guests or registered users.</li>
                <li>Secure Authentication: Implemented Django-based system with email verification.</li>
                <li>Profile Management: Users can view order history, track orders, and update shipping/billing info.</li>
              </ul>
            </li>
            <li>
              <strong>Admin Capabilities:</strong>
              <ul className="list-disc pl-6">
                <li>Product Management: Admins can easily upload and manage products, sizes, and pricing using Django models.</li>
              </ul>
            </li>
            <li>
              <strong>Order Processing:</strong>
              <ul className="list-disc pl-6">
                <li>Seamless Checkout: Streamlined process with email confirmations.</li>
                <li>Order Notifications: Users receive email updates on order status.</li>
              </ul>
            </li>
            <li>
              <strong>Technologies Used:</strong>
              <ul className="list-disc pl-6">
                <li>Backend: Django (authentication, email integration)</li>
                <li>Frontend: HTML, CSS, JavaScript</li>
                <li>Database Management: Handled via Django models</li>
              </ul>
            </li>
            <li>
              <strong>Achievements:</strong>
              <ul className="list-disc pl-6">
                <li>Built a secure, user-friendly e-commerce platform from scratch.</li>
                <li>Developed an intuitive admin interface for efficient product management.</li>
                <li>Implemented a complete order processing system with real-time email notifications.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>`,
    photos: [ ecom1, ecom2, ecom3, ecom4, ecom5, ecom6, ecom7, ecom8, ecom9],
    live: "https://gilded-phoenix-51fe49.netlify.app/",
    code: "https://github.com/merab7/cryptico2.0.git",
    id: "0",
  },
];


export default projectsData;
