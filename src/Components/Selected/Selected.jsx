import React from 'react';
import Newsletter from '../Newsletter/Newsletter';

export default function Selected({ allPlayers, selected }) {
  console.log(selected);
  return (
    <div>
      <div>
        <h1 className="text-lg md:text-2xl font-extrabold ">
          Available Players ({allPlayers.length}
        </h1>
      </div>

      <div className="border-2 p-4 rounded-xl">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p className="font-semibold text-2xl">djf</p>
          <p className="font-normal">hkjg</p>
        </div>
      </div>

      <div className="relative mt-72">
        <Newsletter />
      </div>
    </div>
  );
}
