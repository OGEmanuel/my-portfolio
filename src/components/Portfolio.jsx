import html from '../assets/icons8-html-5-48.png';
import css from '../assets/icons8-css3-48.png';
import tailwind from '../assets/icons8-tailwindcss-48.png';
import sass from '../assets/icons8-sass-48.png';
import javascript from '../assets/icons8-javascript-48.png';
import git from '../assets/icons8-git-48.png';
import assess from '../assets/devassess.png';
import github from '../assets/icons8-github.svg';
import link from '../assets/icons8-link-24.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import React from '../assets/animatedSVG/React';
import framer from '../assets/framer.svg';
import portfolio from '../assets/portfolio.png';

const imgVariants = {
  hover: {
    scale: [1, 1.5, 1, 1.3, 1, 1.2, 1],
  },
};

const Portfolio = () => {
  const [active, setActive] = useState(null);

  const handleHover = id => {
    setActive(id);
  };

  const handleMouseOut = () => {
    setActive(null);
  };

  const SKILLS = [
    { id: 1, icon: html, framework: 'HTML' },
    { id: 2, icon: css, framework: 'CSS' },
    { id: 3, icon: sass, framework: 'SASS' },
    { id: 4, icon: tailwind, framework: 'Tailwind CSS' },
    { id: 5, icon: javascript, framework: 'Javascript' },
    { id: 6, icon: <React />, framework: 'React' },
    { id: 7, icon: git, framework: 'Git' },
    { id: 8, icon: framer, framework: 'Framer Motion' },
  ];

  const PROJECTS = [
    {
      id: 1,
      preview: assess,
      title: 'Desktop Assessment Project',
      code: 'https://github.com/OGEmanuel/team-assessment-frontend',
      live: 'https://devcareer-assessment.netlify.app/',
      tech: [
        { id: 1.1, icon: <React />, framework: 'React' },
        { id: 1.2, icon: css, framework: 'CSS' },
        { id: 1.3, icon: git, framework: 'Git' },
      ],
    },
    {
      id: 2,
      preview: portfolio,
      title: 'My Portfolio Website',
      code: 'https://github.com/OGEmanuel/my-portfolio',
      live: 'https://emanueldev.netlify.app/',
      tech: [
        { id: 2.1, icon: <React />, framework: 'React' },
        { id: 2.2, icon: tailwind, framework: 'Tailwind' },
        { id: 2.3, icon: framer, framework: 'Framer Motion' },
        { id: 2.4, icon: git, framework: 'Git' },
      ],
    },
  ];

  return (
    <div className="bg-yellow-500 text-white md:py-14 flex flex-col-reverse gap-4 md:grid grid-cols-2 p-7 overflow-auto md:overflow-y-scroll xl:overflow-hidden">
      <div className="gap-5 mb-4">
        <h1 className="text-4xl font-bold text-center mb-4">Technologies</h1>
        <div className="grid grid-cols-3 gap-5 justify-center mb-20">
          {SKILLS.map(skill => (
            <div
              className={`flex flex-col items-center ${
                skill.framework === 'React' ||
                skill.framework === 'Git' ||
                skill.framework === 'Framer Motion'
                  ? 'md:justify-between gap-4'
                  : ''
              }`}
              key={skill.id}
            >
              {skill.framework === 'React' ? (
                skill.icon
              ) : (
                <motion.img
                  variants={imgVariants}
                  whileHover="hover"
                  src={skill.icon}
                  alt=""
                />
              )}
              <figcaption className="text-center">{skill.framework}</figcaption>
            </div>
          ))}
        </div>
        <Footer />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center mb-4">Project</h2>
        <div className="flex flex-wrap xl:gap-0 gap-4">
          {PROJECTS.map(project => (
            <motion.div
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              onMouseOver={() => handleHover(project.id)}
              onMouseOut={handleMouseOut}
              transition={{ type: 'spring', stiffness: 55 }}
              className="bg-gray-100 text-black w-[15rem] px-6 py-3 mx-auto rounded-[5px] shadow-md"
              key={project.id}
            >
              <div
                className={`${
                  active === project.id ? 'brightness-50' : ''
                } w-[12rem] mx-auto my-2 overflow-hidden relative rounded-[5px] transition`}
              >
                <motion.img
                  src={project.preview}
                  alt=""
                  className="w-full transition"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'tween' }}
                />
                <Link to={project.code}>
                  <motion.img
                    src={github}
                    alt=""
                    variants={imgVariants}
                    whileHover="hover"
                    className={`${
                      active === project.id ? 'absolute' : 'hidden'
                    } self-center top-[37%] right-[70%]`}
                  />
                </Link>
                <Link to={project.live}>
                  <motion.img
                    src={link}
                    variants={imgVariants}
                    whileHover="hover"
                    alt=""
                    className={`${
                      active === project.id ? 'absolute' : 'hidden'
                    } self-center top-[40%] right-[20%]`}
                  />
                </Link>
              </div>
              <p className="text-center pb-2 font-semibold text-lg">
                {project.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {project.tech.map(tech => (
                  <div key={tech.id}>
                    {tech.framework === 'React' ? (
                      tech.icon
                    ) : (
                      <motion.img
                        variants={imgVariants}
                        whileHover="hover"
                        src={tech.icon}
                        alt=""
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
