// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import renderLogo from './assets/tech_logo/render.png';

// Project Section Logo's
import calculatorLogo from './assets/work_logo/Basic-Calculator.png';
import passManageLogo from './assets/work_logo/Password-Manager.png';
import passGenerateLogo from './assets/work_logo/Password-Generator.png';
import languageTranslateLogo from './assets/work_logo/Language-Translator.png';
import callingLogo from './assets/work_logo/Video-Calling-Web-App.png';

// Education Section Logo's
import schoolLogo from './assets/education_logo/school.png';
import collegeLogo from './assets/education_logo/college.jpg'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: renderLogo},
    ],
  },
];

export const ProjectsInfo = [
  {
    id : 0,
    title : "Video-Calling-Web-App",
    description : "Seamlessly connect with anyone, anytime using our secure video conferencing app. Enjoy real-time video calls, user authentication, and live status features",
    image : callingLogo,
    tags : ["React JS", "Node.js", "Express", "WebRTC", "Tailwindcss", "MongoDB", "Socket.io"],
    github : "https://github.com/Aashish937/Video-Conferencing-Web-App",
    livelink : "https://video-conferencing-web-app.netlify.app"
  },
  {
    id : 1,
    title : "Language-Translator",
    description : "Break language barriers with our intelligent language translator. Translate text instantly across multiple languages with accurate and user-friendly output",
    image : languageTranslateLogo,
    tags : ["HTML", "CSS", "JavaScript"],
    github : "https://github.com/Aashish937/Language-Translator",
    livelink : "https://language-translator-k9pc.onrender.com"
  },
  {
    id : 2,
    title : "Password-Manager",
    description : "A simple password manager to save, edit, and delete passwords for future use. Keep your credentials organized and easily accessible in one secure place",
    image : passManageLogo,
    tags : ["HTML", "CSS", "JavaScript"],
    github : "https://github.com/Aashish937/Password_Manager_2",
    livelink : "https://password-manager-2.onrender.com"
  },
  {
    id : 3,
    title : "Password-Generator",
    description : "Generate strong, secure passwords instantly with our customizable password generator. Ensure online safety with random combinations of letters, numbers, and symbols",
    image : passGenerateLogo,
    tags : ["React JS", "CSS", "Node.js"],
    github : "https://github.com/Aashish937/Password_Generator",
    livelink : "https://big-password-generator.netlify.app/"
  },
  {
    id : 4,
    title : "Basic-Calculator",
    description : "A simple and intuitive calculator for performing basic arithmetic operations. Designed with a clean interface to handle addition, subtraction, multiplication, and division effortlessly",
    image : calculatorLogo,
    tags : ["HTML", "CSS", "JavaScript"],
    github : "https://github.com/Aashish937/Basic-Calculator",
    livelink : "https://basic-calculator-c3ae.onrender.com"
  }
];

export const EducationInfo = [
  {
    id : 0,
    image : collegeLogo,
    school : "Pranveer Singh Institute of Technology, Kanpur",
    date : "Aug 2022 - July 2026",
    grade : "8.55 CGPA",
    degree : "Bachelor of Technology - B.Tech (Computer Science)",
    description : "I am pursuing my Bachelor of Technology (B.Tech) in Computer Science, where I have built a strong foundation in programming, algorithms, and software development. Throughout the course, I worked on multiple practical projects, including a video conferencing app, language translator, and password manager. These experiences enhanced my technical skills and problem-solving abilities. The program also emphasized hands-on learning through coding labs and real-world applications."
  },
  {
    id : 1,
    image : schoolLogo,
    school : "Escorts World School, Kanpur",
    date : "Apr 2020 - Mar 2021",
    grade : "91.2%",
    degree : "CBSE (XII) - PCM with Computer Science",
    description : "I completed my Class 12th education under the CBSE Board, with a strong academic focus on Physics, Chemistry, and Mathematics (PCM), along with Computer Science as an additional subject. During this time, I developed a solid understanding of core scientific and analytical concepts, while also gaining foundational programming skills and logical thinking through Computer Science. This combination of technical and analytical subjects helped build a strong base for my future studies in engineering and technology."
  },
  {
    id : 2,
    image : schoolLogo,
    school : "Escorts World School, Kanpur",
    date : "Apr 2018 - Mar 2019",
    grade : "90.6%",
    degree : "CBSE (X) - Science with Computer Science",
    description : "I completed my Class 10th under the Central Board of Secondary Education (CBSE), with a strong focus on subjects like Science, Mathematics, and English, along with basic knowledge of Computer Science. This provided me with a solid academic foundation and introduced me to fundamental computer concepts and digital literacy."
  }
]