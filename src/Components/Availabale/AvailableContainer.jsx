import React from 'react';

export default function AvailableContainer({ handleIsActiveStatus, isActive }) {
  return (
    <div className="w-11/12 2xl:w-10/12 mx-auto flex justify-between gap-3 py-5 mt-10 items-center">
      <h1 className="text-lg md:text-2xl font-extrabold ">Available Players</h1>

      <div className="flex border-2 rounded-xl">
        <button
          onClick={() => handleIsActiveStatus('available')}
          className={`${
            isActive.available
              ? 'text-xs md:text-base font-bold bg-primary_btn p-3 rounded-l-lg'
              : 'text-xs md:text-base font-normal px-3  text-[#13131399] '
          }`}
        >
          Available
        </button>

        <button
          onClick={() => handleIsActiveStatus('selected')}
          className={`${
            isActive.available
              ? 'text-xs md:text-base font-normal px-3  text-[#13131399] '
              : 'text-xs md:text-base font-bold bg-primary_btn p-3  rounded-r-lg'
          }`}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
}
