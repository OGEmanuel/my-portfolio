import { Link } from 'react-router-dom';
import illustration from '../assets/home-illustration.jpg';

const Home = () => {
  return (
    <div className="grid md:grid-cols-2 bg-red-500 stack md:stack-none text-gray-100 md:text-white">
      <div className="md:p-7 py-10 px-6 self-center area z-10 md:z-auto md:area-none">
        <h1 className="text-2xl font-bold mb-2 md:mb-4">About Me!</h1>
        <h2 className="text-lg mb-4 md:mb-2">
          I am <span className="font-semibold">Ogunmola Emmanuel</span>, A
          Frontend Developer;
        </h2>
        <p className="text-lg mb-4 md:mb-2 leading-loose xl:w-[35rem]">
          <Link
            to="https://devcareer.io/"
            className="transition p-2 rounded-[5px] bg-white text-red-500"
          >
            DevCareer
          </Link>{' '}
          Alumnus and Junior Frontend Developer at Aurbase.
        </p>
        <p className="text-lg xl:w-[35rem]">
          Proficient in HTML, CSS (SASS & TailwindCSS), JavaScript, React and
          Version Control. Looking to add value to any oragnisation i'm
          privileged to work for, with my technical skills; while also
          exhibiting my soft skills in my interactions with my colleagues.
        </p>
        <p className="text-lg xl:w-[35rem]">
          I convert designs neatly and beutifully, paying attention to details,
          leaving no stone unturned. Responsiveness to different screen sizes,
          optimized webpages and accessible websites is my pride.
        </p>
      </div>
      <img
        src={illustration}
        alt="illustration"
        className="h-full md:w-auto area brightness-50 md:brightness-100 md:area-none"
      />
    </div>
  );
};

export default Home;
