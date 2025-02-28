import React from "react";
import DielyList from "./components/DielyList"; // Importuje komponent na zobrazenie dielov

function App() {
    return (
        <div>
            <h1>Autodielňa</h1>
            <DielyList />  {/* Tu zobrazíme zoznam dielov */}
        </div>
    );
}

export default App;