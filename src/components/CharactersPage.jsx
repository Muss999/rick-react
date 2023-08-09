import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    // console.log(characters);
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => setCharacters(data));
    }, []);
    if (!characters.results) {
        return null;
    }

    let result = characters.results;
    return (
        <div>
            <h1>Characters List:</h1>
            <div className="d-flex flex-wrap justify-content-center w-100">
                {result.map((character) => (
                    <Card
                        key={character.id}
                        style={{ width: "18rem" }}
                        className="m-5 character-card"
                    >
                        <Card.Img
                            className="bbb2"
                            variant="top"
                            src={character.image}
                            style={{ height: "300px" }}
                        />
                        <Card.Body className="bg-dark text-white bbb1">
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                Gender: {character.gender} <br />
                                Species: {character.species} <br />
                                Status: {character.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CharactersPage;
