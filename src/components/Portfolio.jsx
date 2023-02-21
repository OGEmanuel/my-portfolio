import html from '../assets/icons8-html-5-48.png';
import css from '../assets/icons8-css3-48.png';
import tailwind from '../assets/icons8-tailwindcss-48.png';
import sass from '../assets/icons8-sass-48.png';
import javascript from '../assets/icons8-javascript-48.png';
import react from '../assets/react.svg';
import git from '../assets/icons8-git-48.png';
import assess from '../assets/devassess.png';
import github from '../assets/icons8-github.svg';
import link from '../assets/icons8-link-24.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="bg-yellow-500 text-white flex flex-col-reverse gap-4 md:grid grid-cols-2 p-7">
      <div className="gap-5 mb-4">
        <h1 className="text-4xl font-bold text-center mb-4">Technologies</h1>
        <div className="grid grid-cols-2 gap-5 justify-center">
          <div className="flex flex-col items-center">
            <img src={html} alt="" />
            <figcaption>HTML</figcaption>
          </div>
          <div className="flex flex-col items-center">
            <img src={css} alt="" />
            <figcaption>CSS</figcaption>
          </div>
          <div className="flex flex-col items-center">
            <img src={sass} alt="" />
            <figcaption>SASS</figcaption>
          </div>
          <div className="flex flex-col items-center">
            <img src={tailwind} alt="" />
            <figcaption>Tailwind</figcaption>
          </div>
          <div className="flex flex-col items-center">
            <img src={javascript} alt="" />
            <figcaption>Javascript</figcaption>
          </div>
          <div className="flex flex-col items-center justify-between">
            <img src={react} alt="" className="self-center" />
            <figcaption>React</figcaption>
          </div>
          <div className="flex flex-col items-center">
            <img src={git} alt="" />
            <figcaption>Git</figcaption>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-4">Project</h2>
        <div className="bg-gray-100 text-black w-[15rem] px-6 py-3 mx-auto rounded-[5px] shadow-md">
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={`${
              isHovering ? 'brightness-50' : ''
            } w-[12rem] mx-auto my-2 overflow-hidden relative rounded-[5px] transition`}
          >
            <img
              src={assess}
              alt=""
              className="w-full hover:scale-105 transition"
            />
            <Link to="https://github.com/OGEmanuel/team-assessment-frontend">
              <img
                src={github}
                alt=""
                className={`${
                  isHovering ? 'absolute' : 'hidden'
                } self-center top-[37%] right-[70%]`}
              />
            </Link>
            <Link to="https://devcareer-assessment.netlify.app/">
              <img
                src={link}
                alt=""
                className={`${
                  isHovering ? 'absolute' : 'hidden'
                } self-center top-[40%] right-[20%]`}
              />
            </Link>
          </div>
          <p className="text-justify pb-2 text-sm font-semibold">
            I developed this site during my internship at DevCareer. It's the
            proposed assessment platform for future interns.
          </p>
          <div className="flex justify-center gap-4">
            <img src={react} alt="" />
            <img src={css} alt="css" />
            <img src={git} alt="git" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
