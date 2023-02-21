import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-red-500 text-white p-10">
      <h1 className="text-4xl mb-4">
        I am <span className="font-bold">Ogunmola Emmanuel</span>,
      </h1>
      <p className="text-4xl font-bold mb-12">A Frontend Developer;</p>
      <p className="text-4xl mb-16">
        <Link
          to="https://devcareer.io/"
          className="transition p-2 rounded-[5px] bg-white text-red-500"
        >
          DevCareer
        </Link>{' '}
        Alumnus and Junior Frontend Developer at Aurbase.
      </p>
      <p className="text-4xl mb-12">
        Proficient in HTML, CSS (SASS & TailwindCSS), JavaScript, React and
        Version Control.
      </p>
    </div>
  );
};

export default Home;
