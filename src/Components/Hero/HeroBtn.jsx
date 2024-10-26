import React from 'react';

export default function HeroBtn({ handleAddCoin }) {
  return (
    <div>
      <button
        onClick={() => handleAddCoin(100000)}
        className="bg-primary_btn text-xl font-bold hover:bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-500   transition duration-300 ease-in-out active:transform active:scale-95 text-black  py-3 px-6 rounded-lg"
      >
        Claim Free Credit
      </button>
    </div>
  );
}
