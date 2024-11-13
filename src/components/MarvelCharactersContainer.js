/** @format */
import React from "react";
import CharacterCard from "./CharacterCard";

const MarvelCharactersContainer = ({ characters, onCardClick }) => (
    <div className="flex flex-wrap justify-center">
        {characters.map((character) => (
            <CharacterCard
                key={character.id}
                character={character}
                onClick={onCardClick}
            />
        ))}
    </div>
);

export default MarvelCharactersContainer;
