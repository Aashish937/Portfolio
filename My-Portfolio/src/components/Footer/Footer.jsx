import React from 'react';
import { FaLinkedin, FaGithub, FaHackerrank, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>
          Aashish Kumar Singh
        </h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Project", id: "project" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className='flex flex-wrap justify-center space-x-4 mt-6'>
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aashish-kumar-singh-008156282/" },
            { icon: <FaGithub />, link: "https://github.com/Aashish937" },
            { icon: <SiLeetcode />, link: "https://leetcode.com/u/CSAI_1641520002/" },
            { icon: <FaHackerrank />, link: "https://www.hackerrank.com/profile/CSAI_1641520002" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_black'
              className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className='text-sm text-gray-400 mt-6 '>
          © 2025 Aashish Kumar Singh. All rights are reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;