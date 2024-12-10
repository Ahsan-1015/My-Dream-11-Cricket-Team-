import PropTypes from 'prop-types';
import Newsletter from '../Newsletter/Newsletter';

export default function Selected({ selected, handleDelete }) {
  return (
    <div>
      <div>
        <h1 className="text-lg md:text-2xl font-extrabold">
          Available Players ({selected.length})
        </h1>
      </div>

      {selected.map(selectedShow => (
        <div
          key={selectedShow.playerId}
          className="border-2 p-4 rounded-xl flex items-center justify-between gap-4 mt-4"
        >
          <div className="flex gap-3">
            <div className="w-24">
              <img
                className="w-full rounded-lg"
                src={selectedShow.image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-xl md:text-2xl">
                {selectedShow.name}
              </p>
              <p className="font-normal text-gray-500">{selectedShow.role}</p>
            </div>
          </div>

          <button onClick={() => handleDelete(selectedShow.playerId)}>
            <img
              src="https://img.icons8.com/?size=48&id=102550&format=png"
              alt=""
            />
          </button>
        </div>
      ))}

      <div className="relative mt-72">
        <Newsletter />
      </div>
    </div>
  );
}

Selected.propTypes = {
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      playerId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
