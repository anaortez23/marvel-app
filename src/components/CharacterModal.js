/** @format */
import React from "react";

const CharacterModal = ({ character, onClose }) => (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-1/3 border-4 border-red-500 relative">
            <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-4 text-red-600">
                {character.name}
            </h2>
            <p className="text-lg text-gray-700">
                {character.description || "Does not have description."}
            </p>
            <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </div>
);

export default CharacterModal;
