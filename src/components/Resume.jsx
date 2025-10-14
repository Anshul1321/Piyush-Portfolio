import React from "react";
import AboutImage from "../assets/images/dev-image.jpg";
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>Redux</li>
                <li>REST API</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Git</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">Bachelors of Engineering</p>
              <p>Graduated from RGPV University (2022)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Certification
              </h3>
              <p className="font-medium">
                Full Stack Development (Scaler)
              </p>
              <p> AWS Cloud Practitioner (Udemy)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/Anshul1321/Trailed-PG.git"
                    target="_blank"
                    rel="noopener noreferrer">
                    Trailed
                  </a>{" "}
                  - A full-stack e-commerce app with features like add to cart, user authentication via Firebase.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/Anshul1321/Sky-Trans.git"
                    target="_blank"
                    rel="noopener noreferrer">
                    SkyTrans
                  </a>{" "}
                  - A flight cargo transport service with user-friendly design and responsive layout.
                </li>
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/Anshul1321/flavoro-piyush.git"
                    target="_blank"
                    rel="noopener noreferrer">
                   Flavoro Piyush
                  </a>{" "}
                  - An online food delivery platform that lets users browse foods, explore menus, and place orders seamlessly.
                </li>
                <li>
                  <a
                    href="https://github.com/Anshul1321/Backend-Ecommerce.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary">
                   Ecommerce Backend
                  </a>{" "}
                  - A robust eCommerce backend built with Django and SQLite, featuring product management, user authentication, and order handling.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Saam Sheron"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Piyush Garg</p>
            <p className="text-lg text-secondary">
              Full Stack Developer | Software Engineer
            </p>
            <a
              href="mailto:saam.sheron@example.com"
              className="text-lg text-primary mt-4 block">
              piyushgarg1321@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/piyush-garg-4a0b68237"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>
              <a
                href="https://github.com/Anshul1321"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub className="text-2xl text-[#333] hover:text-secondary" />
              </a>
              <a
                href="https://www.instagram.com/piyush_1321_?igsh=b29qdjFtcG1yeml3"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-secondary" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
