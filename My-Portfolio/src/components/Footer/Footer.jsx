import React from 'react';

const Footer = () => {

  const handleScroll = (id) => {
     const section = document.getElementById(id);
     if(section){
      section.scrollIntoView({behavior: "smooth"});
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
            { name:"About", id:"about" },
            { name:"Skills", id:"skills" },
            { name:"Project", id:"project" },
            { name:"Education", id:"education" },
            { name:"Contact", id:"contact" }
          ].map((item,index) => (
            <button
            key = {index}
            onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;