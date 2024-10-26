import PlayerCard from '../PlayerCard/PlayerCard';
import Newsletter from '../Newsletter/Newsletter';

const MainContainer = ({ allPlayers, handleSelected }) => {
  return (
    <>
      <div>
        <h1 className="text-lg md:text-2xl font-extrabold ">
          Available Players ({allPlayers.length}
        </h1>
      </div>
      <div className="relative ">
        <div className="  grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3  gap-20   py-9 pb-72">
          {allPlayers.map(allplayer => (
            <PlayerCard
              handleSelected={handleSelected}
              key={allplayer.playerId}
              playerId={allplayer.playerId}
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
    </>
  );
};

export default MainContainer;
