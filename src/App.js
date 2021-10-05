import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/serach-box/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // Filtering the monsters out
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBox
        placeholder="Search Monsters"
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
