import HeroBtn from './HeroBtn';
import './Hero.css';

function Hero({ handleAddCoin, coin }) {
  return (
    <section className=" bgImage bg-cover  bg-gray-950 rounded-2xl shadow-lg overflow-hidden w-11/12 2xl:w-10/12 mx-auto mt-5 py-4 2xl:py-14">
      <div className=" w-full lg:w-10/12 mx-auto px-1 py-16 flex flex-col justify-center items-center text-center">
        {/* Banner Image */}
        <img
          src="banner-main.png"
          alt="Cricket Graphic"
          className="w-32 lg:w-36 2xl:w-48 object-cover mb-8"
        />

        {/* Banner Heading */}
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        {/* Banner Subheading */}
        <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-400 mt-4 font-medium font-mono">
          Beyond Boundaries Beyond Limits
        </p>

        {/* Call to Action Button */}
        <div className="mt-6 border-2 border-primary_btn p-3 rounded-xl hover:border-gradient-to-r from-pink-300 via-yellow-300 to-yellow-500">
          <HeroBtn coin={coin} handleAddCoin={handleAddCoin}></HeroBtn>
        </div>
      </div>
    </section>
  );
}

export default Hero;
