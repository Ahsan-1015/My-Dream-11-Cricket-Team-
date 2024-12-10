import PropTypes from 'prop-types';
import { useState } from 'react';

function Nav({ coin }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="w-11/12 2xl:w-10/12 mx-auto py-3 flex justify-between items-center mt-2 2xl:mt-5 lg:py-4">
        <div className="w-12 md:w-16">
          <a href="">
            <img src="logo.png" alt="Logo" />
          </a>
        </div>

        <div className="flex gap-10 2xl:gap-16 items-center">
          <div className="hidden sm:flex space-x-16 items-end">
            <div className="flex gap-10 2xl:gap-14">
              {['Home', 'Fixture', 'Teams', 'Schedules'].map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-gray-900 2xl:text-xl"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <button className="border-2 p-2 2xl:p-3 px-4 2xl:px-6 rounded-lg flex space-x-1 items-center">
            <p className="text-base lg:text-xl font-semibold">{coin} $</p>
            <img
              className="w-7"
              src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"
              alt="Coin Icon"
            />
          </button>
        </div>

        <div className="sm:hidden items-center flex">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2 rounded-full border"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="sm:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4">
            {['Home', 'Fixture', 'Teams', 'Schedules'].map(item => (
              <li key={item}>
                <a
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 text-center"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </nav>
  );
}

Nav.propTypes = {
  coin: PropTypes.number.isRequired,
};

export default Nav;
