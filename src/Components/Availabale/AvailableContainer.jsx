import React from 'react';

export default function AvailableContainer() {
  return (
    <div className="w-11/12 2xl:w-10/12 mx-auto flex justify-between gap-3 py-5 mt-10 items-center">
      <h1 className="text-lg md:text-2xl font-extrabold ">Available Players</h1>
      <div className="flex border-2 rounded-xl">
        <div className="flex gap-2 md:gap-3 p-3   md:px-6  bg-primary_btn">
          <button className="text-xs md:text-base font-bold">Available</button>
        </div>
        <button className="text-xs md:text-base font-normal px-3  text-[#13131399]">
          Selected (0)
        </button>
      </div>
    </div>
  );
}
