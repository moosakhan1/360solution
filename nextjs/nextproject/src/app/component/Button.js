import React from "react";

function Button({ setCategory }) {
  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      <button
        className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-200"
        onClick={() => setCategory("all")}
      >
        all
      </button>
      <button
        className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-200"
        onClick={() => setCategory("men")}
      >
        Men
      </button>
      <button
        className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-200"
        onClick={() => setCategory("women")}
      >
        Women
      </button>
      <button
        className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-200"
        onClick={() => setCategory("kids")}
      >
        Kids
      </button>
    </div>
  );
}

export default Button;
