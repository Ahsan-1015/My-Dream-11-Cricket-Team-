import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
import Newsletter from '../Newsletter/Newsletter';

const MainContainer = () => {
  return (
    <div className="relative ">
      <div className=" w-11/12  2xl:w-10/12 mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-20   py-9 pb-72">
        <PlayerCard></PlayerCard>
        <PlayerCard></PlayerCard>
        <PlayerCard></PlayerCard>
        <PlayerCard></PlayerCard>
        <PlayerCard></PlayerCard>
        <PlayerCard></PlayerCard>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default MainContainer;
