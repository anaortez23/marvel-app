/** @format */
import React from "react";

const CharacterCard = ({ character, onClick }) => (
    <div
        className="bg-white shadow-md rounded-lg p-4 m-4 w-64 cursor-pointer transform transition-transform hover:scale-105"
        onClick={() => onClick(character)}
    >
        <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            className="w-full h-40 object-cover rounded-t-lg"
        />
        <h2 className="text-xl font-semibold mt-2">{character.name}</h2>
        <p className="text-gray-600">
            {character.description || "Does not have description."}
        </p>
    </div>
);

export default CharacterCard;
