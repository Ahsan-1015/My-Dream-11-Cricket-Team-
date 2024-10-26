import React from 'react';

const Newsletter = () => {
  return (
    <div className="w-11/12 2xl:w-10/12 mx-auto  absolute -bottom-44 left-3 md:left-8 lg:left-16 2xl:left-40  border-2 rounded-3xl p-4 bg-[#FFFFFF26] backdrop-blur-lg  ">
      <section className=" bg-gradient-to-r from-blue-100 to-yellow-100 py-8 md:py-12 px-6 rounded-3xl ">
        <div className="max-w-4xl mx-auto text-center  rounded-lg py-10 px-6">
          <h2 className="text-2xl md:text-4xl font-bold">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-500 mt-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border text-sm md:text-base border-gray-300 rounded-2xl px-2 md:px-4 py-3 w-60 md:w-80 focus:outline-none focus:border-yellow-500"
            />
            <button className="ml-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-semibold text-sm px-3 md:px-6 py-3 rounded-2xl shadow-lg hover:from-pink-400 hover:to-yellow-400 hover:transition-all duration-700 ease-in-out  active:transform active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
