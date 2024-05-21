
import './App.css';

const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];

function App() {
  return (
    <div className="App">

      {planets.map((planet,key)=>{
        return(
          <div key={key}>
            {planet.isGasPlanet?null:planet.name}
          </div>
        )

      })}

    </div>

  );
}


export default App;
