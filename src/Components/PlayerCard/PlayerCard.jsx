import React from 'react';

const PlayerCard = ({ name, country, role, price, rating, imgSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full p-5 border border-gray-200">
      {/* Image Section */}
      <div className="h-48 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
        {imgSrc ? (
          <img src={imgSrc} alt={name} className="object-cover h-full w-full" />
        ) : (
          <div className="h-full flex justify-center items-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Player Name and Icon */}
      <div className="flex items-center mb-2 gap-2">
        <img
          className="w-6"
          src="https://image.shutterstock.com/image-vector/businessman-icon-260nw-564112600.jpg"
          alt=""
        />
        <h3 className="text-lg font-semibold">{name}ronaldo</h3>
      </div>

      {/* Country and Role */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <div className="flex items-center gap-4">
          <img
            className="w-4 "
            src="https://img.icons8.com/?size=50&id=2755&format=png"
            alt=""
          />
          <p>{country} India</p>
        </div>

        <button className="px-4 p-2 bg-gray-100 rounded-lg text-xs">
          {role} All Rouder
        </button>
      </div>
      <hr />

      {/* Player Details */}
      <div className="pt-4">
        <div className="text-gray-900  mb-3">
          <p className="font-bold ">Rating</p>
        </div>
        <div className="flex justify-between pb-2">
          <p className="font-semibold ">{rating} Left Hand</p>
          <p className="text-gray-600 ">{rating} Left Hand</p>
        </div>

        {/* last  */}
        <div className=" flex  justify-between items-center">
          <div className="text-gray-900   flex space-x-2 items-center">
            <p className="font-medium">Price</p>
            <p>${price} 133333</p>
          </div>

          {/* Choose Player Button */}
          <div>
            <button className=" border-2  text-black font-semibold p-2 rounded-md hover:bg-blue-600 transition duration-300">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
