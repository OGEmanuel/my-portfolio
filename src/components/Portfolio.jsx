import github from '../assets/icons8-github.svg';
import link from '../assets/icons8-link-24.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import React from '../assets/animatedSVG/React';
import { SKILLS, PROJECTS } from '../helpers/helper';

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

  return (
    <div className="bg-yellow-500 text-white md:py-14 scroll gap-4 p-7 overflow-auto md:overflow-y-scroll">
      <div className="md:overflow-scroll md:w-full scroll mb-10">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {PROJECTS.map(project => (
            <div
              onMouseOver={() => handleHover(project.id)}
              onMouseOut={handleMouseOut}
              transition={{ type: 'spring', stiffness: 55 }}
              className="bg-gray-100 text-black w-[15rem] px-6 py-3 mx-auto rounded-[5px] shadow-md"
              key={project.id}
            >
              <div
                className={`${
                  active === project.id ? '' : ''
                } w-[12rem] mx-auto my-2 overflow-hidden relative rounded-[5px] transition`}
              >
                <motion.img
                  src={project.preview}
                  alt=""
                  className="w-full transition"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'tween' }}
                />
                <Link to={project.code} target="_blank">
                  <motion.img
                    src={github}
                    alt=""
                    variants={imgVariants}
                    whileHover="hover"
                    className={`${
                      active === project.id
                        ? 'absolute bg-white rounded-sm p-1.5'
                        : 'hidden'
                    } self-center top-[37%] right-[70%]`}
                  />
                </Link>
                <Link to={project.live} target="_blank">
                  <motion.img
                    src={link}
                    variants={imgVariants}
                    whileHover="hover"
                    alt=""
                    className={`${
                      active === project.id
                        ? 'absolute bg-white rounded-sm p-1.5'
                        : 'hidden'
                    } self-center top-[40%] right-[20%]`}
                  />
                </Link>
              </div>
              <p className="text-center pb-2 font-semibold text-lg">
                {project.title}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {project.tech.map(tech => (
                  <div key={tech.id} className="w-max">
                    <motion.img
                      variants={imgVariants}
                      whileHover="hover"
                      src={tech.icon}
                      alt=""
                      className="w-12"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gap-5 mb-4">
        <h1 className="text-4xl font-bold text-center mb-4">Technologies</h1>
        <div className="grid grid-cols-3 gap-5 justify-center mb-20">
          {SKILLS.map(skill => (
            <div
              className={`flex flex-col items-center ${
                skill.framework === 'NextJs' ? 'md:justify-end gap-4' : ''
              } ${
                skill.framework === 'React' ||
                skill.framework === 'Git' ||
                skill.framework === 'Framer Motion'
                  ? 'md:justify-between gap-4'
                  : ''
              }`}
              key={skill.id}
            >
              <motion.img
                variants={imgVariants}
                whileHover="hover"
                src={skill.icon}
                className={`${skill.framework === 'NextJs' ? 'w-[5rem]' : ''}`}
                alt=""
              />
              <figcaption className="text-center">{skill.framework}</figcaption>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
