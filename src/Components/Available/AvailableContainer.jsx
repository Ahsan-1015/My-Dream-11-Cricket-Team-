import MainContainer from '../MainContainer/MainContainer';
import Selected from '../Selected/Selected';
import PropTypes from 'prop-types';

export default function AvailableContainer({
  handleIsActiveStatus,
  isActive,
  allPlayers,
  handleSelected,
  selected,
  handleDelete,
}) {
  return (
    <div className="w-11/12 2xl:size-10/12 mx-auto mt-5">
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
            Selected ({selected.length})
          </button>
        </p>
      </div>
      {isActive.available ? (
        <MainContainer
          allPlayers={allPlayers}
          handleSelected={handleSelected}
        />
      ) : (
        <Selected
          allPlayers={allPlayers}
          selected={selected}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

AvailableContainer.propTypes = {
  handleIsActiveStatus: PropTypes.func.isRequired,
  isActive: PropTypes.shape({
    available: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  allPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleSelected: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      biddingPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
