import React from 'react';
import { EducationInfo } from '../../allSkills';


const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {EducationInfo.map((education, index) => (
          <div
            key={education.id}
            className="w-full sm:max-w-2xl mx-auto mb-6 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center space-x-6">
              {/* School Logo/Image */}
              <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={education.image}
                  alt={education.school}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Degree, School Name, and Date */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-xl font-semibold text-white">
                    {education.degree}
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    {education.school}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">{education.date}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-400 font-bold">Grade: {education.grade}</p>
            <p className="mt-4 text-gray-400">{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;