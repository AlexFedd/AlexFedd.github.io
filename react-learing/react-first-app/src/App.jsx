import "./App.scss";
import { Planet } from "./Planet";
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <>
      <div>
        <h1>Газовые планеты:</h1>
        {planets.map((planet, key) => {
          return planet.isGasPlanet && <Planet key={key} name={planet.name} />;
        })}
      </div>
      <div>
        <h1>Не газовые планеты</h1>
        {planets.map((planet, key) => {
          return !planet.isGasPlanet && <Planet key={key} name={planet.name} />;
        })}
      </div>
    </>
  );
}

export default App;
