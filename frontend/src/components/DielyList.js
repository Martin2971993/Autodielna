import React, { useEffect, useState } from "react";

function DielyList() {
    const [diely, setDiely] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/diely")
            .then(response => response.json())
            .then(data => setDiely(data))
            .catch(error => console.error("Chyba pri načítaní dielov:", error));
    }, []);

    return (
        <div>
            <h2>Zoznam dielov</h2>
            <ul>
                {diely.map(diel => (
                    <li key={diel._id}>{diel.nazov} - {diel.cena} €</li>
                ))}
            </ul>
        </div>
    );
}

export default DielyList;