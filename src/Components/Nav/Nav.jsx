import React, { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="w-11/12 2xl:w-10/12 mx-auto py-3  flex justify-between items-center mt-2 2xl:mt-5 lg:py-4">
        {/* left sid image */}
        <div className="w-12 md:w-16 ">
          <a className="w-full" href="">
            <img src="logo.png" alt="" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="flex gap-10 2xl:gap-20 items-center">
          <div className="hidden sm:flex space-x-16  items-end">
            <div className="flex gap-10 2xl:gap-14">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 2xl:text-2xl  "
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 2xl:text-2xl "
              >
                Fixture
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 2xl:text-2xl "
              >
                Teams
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 2xl:text-2xl "
              >
                Schedules
              </a>
            </div>
          </div>

          <button className="  border-2 p-2 2xl:p-4 px-4 2xl:px-6  rounded-lg flex space-x-1  items-center ">
            <p className="text-base lg:text-xl font-semibold "> 0 Coin</p>
            <img
              className="w-7"
              src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png"
              alt=""
            />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="sm:hidden items-center flex">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2 rounded-full border"
          >
            {/* Icon for Hamburger Menu */}
            <svg
              className="w-7 h-7 "
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="sm:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 py-4">
            <button className=" hover:btn">
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 text-center"
              >
                Home
              </a>
            </button>

            <button className=" hover:btn">
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 text-center"
              >
                Fixture
              </a>
            </button>

            <button className=" hover:btn">
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 text-center"
              >
                Teams
              </a>
            </button>

            <button className=" hover:btn">
              <a
                href="#"
                className="block text-gray-700 hover:text-gray-900 text-center"
              >
                Schedules
              </a>
            </button>

            <button className=" hover:btn">
              <a href="#"></a>
            </button>
          </ul>
        </nav>
      )}
    </nav>
  );
}

export default Nav;
