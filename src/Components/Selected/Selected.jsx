import Newsletter from '../Newsletter/Newsletter';

export default function Selected({ selected, handleDelete }) {
  return (
    <div>
      <div>
        <h1 className="text-lg md:text-2xl font-extrabold ">
          Available Players ({selected.length})
        </h1>
      </div>

      {selected.map((selectedShow, index) => (
        <div
          key={index}
          className="border-2 p-4 rounded-xl flex items-center  justify-between gap-4 mt-4"
        >
          <div className="flex gap-3">
            <div className="w-24 ">
              <img
                className="w-full rounded-lg "
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

      {/* {
        // eslint-disable-next-line react/prop-types
        selected.map((selectedShow, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-2 rounded-xl mt-5 p-3"
          >
            <div className="flex gap-2 items-center justify-center">
              <div>
                <img
                  className="w-16 rounded-xl"
                  src={selectedShow.image}
                  alt=""
                />
              </div>

              <div>
                <h2>{selectedShow.name}</h2>
                <p>{selectedShow.role}</p>
              </div>
            </div>

            <button onClick={() => handleDelete(selectedShow.playerId)}>
              <img
                src="https://img.icons8.com/?size=48&id=102550&format=png"
                alt=""
              />
            </button>
          </div>
        ))
      } */}

      <div className="relative mt-72">
        <Newsletter />
      </div>
    </div>
  );
}
