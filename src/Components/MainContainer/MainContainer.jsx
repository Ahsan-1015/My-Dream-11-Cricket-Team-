import PlayerCard from '../PlayerCard/PlayerCard';
import Newsletter from '../Newsletter/Newsletter';

const MainContainer = ({ allPlayers }) => {
  return (
    <div className="relative ">
      <div className=" w-11/12  2xl:w-10/12 mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-20   py-9 pb-72">
        {allPlayers.map(allplayer => (
          <PlayerCard
            key={allplayer.playerId}
            image={allplayer.image}
            name={allplayer.name}
            biddingPrice={allplayer.biddingPrice}
            battingType={allplayer.battingType}
            bowlingType={allplayer.bowlingType}
            country={allplayer.country}
            role={allplayer.role}
          ></PlayerCard>
        ))}
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default MainContainer;
