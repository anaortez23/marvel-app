/** @format */
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MarvelCharactersContainer from "./components/MarvelCharactersContainer";
import CharacterModal from "./components/CharacterModal";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const publicKey = "eba4d2141c40603bf4a56df7e742fb49";
    const ts = "1";
    const hash = "079536783b248f34b1dd7aeee5cb6fef";

    const namePrefixes = ["Spider-man", "Iron man", "Captain", "Thor", "Hulk", "Doctor Strange", "Ant", "Scarlet", "Vision", "Hawkeye", "Gamora", "Groot", "Rocket", "Drax", "Thanos", "Deadpool", "Wolverine", "Cyclops", "Jean", "Storm", "Beast", "Magneto", "Mystique", "Quicksilver", "Wasp", "Daredevil", "Luke", "Punisher", "Ghost", "Blade", "Winter", "Falcon"];

    const requests = namePrefixes.map((prefix) =>
      axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${prefix}&limit=1&orderBy=name&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      )
    );
    Promise.all(requests)
      .then((responses) => {
        const combinedCharacters = responses.flatMap(
          (response) => response.data.data.results
        );
        setCharacters(combinedCharacters);
      })
      .catch((error) => {
        console.error("Error getting Marvel characters:", error);
      });
  }, []);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <MarvelCharactersContainer
        characters={characters}
        onCardClick={handleCardClick}
      />
      {isModalOpen && selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
