import gmail from '../assets/icons8-gmail-logo.svg';
import linkedIn from '../assets/icons8-linkedin.svg';
import gitlab from '../assets/icons8-gitlab.svg';
import twitter from '../assets/icons8-twitter.svg';
import github from '../assets/icons8-github.svg';
import { Link } from 'react-router-dom';
import resume from '../assets/file/Ogunmola-Emmanuel-Frontend-Developer-CV.pdf';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const Contact = () => {
  return (
    <div className="bg-green-500 text-white p-10">
      <h1 className="text-center text-4xl font-bold mb-6">Contact me!</h1>
      <div className="flex gap-10 justify-center flex-wrap mb-10">
        <Link
          to="mailto:emanuolumide@gmail.com"
          className="flex flex-col justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={gmail}
            alt=""
            className="self-center"
          />
          <figcaption>Gmail</figcaption>
        </Link>
        <Link
          to="https://www.linkedin.com/in/emmanuel-ogunmola-a5007a1a6/"
          className="flex flex-col justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={linkedIn}
            alt=""
            className="self-center"
          />
          <figcaption>LinkedIn</figcaption>
        </Link>
        <Link
          to="https://twitter.com/its_GODwithMe"
          className="flex flex-col justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={twitter}
            alt=""
            className="self-center"
          />
          <figcaption>Twitter</figcaption>
        </Link>
        <Link
          to="https://github.com/OGEmanuel"
          className="flex flex-col justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={github}
            alt=""
            className="w-[3rem] self-center"
          />
          <figcaption>Github</figcaption>
        </Link>
        <Link
          t0="https://gitlab.com/6lack5anta"
          className="flex flex-col justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.3 }}
            src={gitlab}
            alt=""
            className="self-center"
          />
          <figcaption>Gitlab</figcaption>
        </Link>
      </div>
      <a href={resume} download="Resume" className="flex mb-6 w-fit mx-auto">
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            boxShadow: '0px 0px 8px rgb(255,255,255)',
          }}
          className="mx-auto p-5 bg-white text-green-500 font-semibold rounded-[5px] text-lg"
        >
          Download My CV
        </motion.button>
      </a>
    </div>
  );
};

export default Contact;
