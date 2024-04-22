import { Link } from 'react-router-dom';
import illustration from '../assets/home-illustration.jpg';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
};

const h1Variant = {
  hidden: {
    opacity: 1,
    fontSize: '1rem',
  },
  visible: {
    opacity: 1,
    fontSize: '2rem',
  },
};

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 min-h-screen md:bg-red-500 stack md:stack-none text-gray-100 md:text-white md:overflow-y-scroll xl:overflow-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="md:p-7 py-10 px-6 self-center area z-10 md:z-auto md:area-none"
      >
        <motion.h1 className="font-bold mb-2 md:mb-4" variants={h1Variant}>
          About Me!
        </motion.h1>
        <h2 className="text-lg mb-4 md:mb-2">
          I am <span className="font-semibold">Ogunmola Emmanuel</span>, A
          Frontend Developer;
        </h2>
        <p className="text-lg xl:w-[35rem]">
          With a strong background in frontend development, I have consistently
          demonstrated my proficiency in building intuitive user interfaces and
          delivering high-quality web applications. My hands-on experience with
          React and NextJS has allowed me to tackle complex challenges and drive
          impactful results. My track record of successfully collaborating with
          cross-functional teams and my commitment to continuous improvement
          make me a valuable asset to any organization seeking to elevate its
          frontend development capabilities.
        </p>
      </motion.div>
      <motion.img
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'tween' }}
        src={illustration}
        alt="illustration"
        className="min-h-screen md:w-auto area brightness-50 object-cover object-right-bottom md:brightness-100 md:area-none"
      />
    </div>
  );
};

export default Home;
