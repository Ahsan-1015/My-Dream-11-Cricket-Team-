import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import Selected from '../Selected/Selected';

export default function AvailableContainer({
  handleIsActiveStatus,
  isActive,
  allPlayers,
  handleSelected,
  selected,
}) {
  return (
    <div className="w-11/12 2xl:size-10/12 mx-auto mt-5">
      {/* <div className="w-11/12 2xl:w-10/12 mx-auto flex justify-between gap-3 py-5 mt-10 items-center">
        <h1 className="text-lg md:text-2xl font-extrabold ">
          Available Players ({allPlayers})
        </h1> */}

      <div className="flex rounded-xl justify-end ">
        <p className="border-2 rounded-xl">
          <button
            onClick={() => handleIsActiveStatus('available')}
            className={`${
              isActive.available
                ? 'text-xs md:text-base font-bold bg-primary_btn p-3 rounded-l-lg '
                : 'text-xs md:text-base  font-semibold px-3  text-[#13131399] '
            }`}
          >
            Available
          </button>

          <button
            onClick={() => handleIsActiveStatus('selected')}
            className={`${
              isActive.available
                ? 'text-xs md:text-base font-semibold px-3  text-[#13131399] '
                : 'text-xs md:text-base font-bold bg-primary_btn p-3  rounded-r-lg'
            }`}
          >
            Selected {allPlayers.length}
          </button>
        </p>
      </div>
      {console.log(isActive.available)}
      {isActive.available ? (
        <MainContainer
          allPlayers={allPlayers}
          handleSelected={handleSelected}
        />
      ) : (
        <Selected allPlayers={allPlayers} selected={selected} />
      )}
    </div>
    // </div>
  );
}
