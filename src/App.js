import { Component } from "react";
import "./App.css";
import data from "./data/dinosaurs";
import DinosaurCard from "./components/DinosaurCard";
import SelectedDino from "./components/SelectedDinosaur";
import Park from "./components/Park";
import NewSpeciesForm from "./components/NewSpeciesForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      park: [],
      species: data.dinosaurs,
      selectedDinosaur: {
        name: "",
        image: "https://via.placeholder.com/100",
      },
    };
  }

  handleDinosaurClick = (dinosaur) => {
    this.setState({
      selectedDinosaur: dinosaur,
    });
  };

  addDino = () => {
    const { park, selectedDinosaur } = this.state;
    this.setState({ park: [...park, selectedDinosaur] });
  };

  addSpecies = (species) => {
    species.id = this.state.species.length + 1;
    this.setState({ species: [...this.state.species, species] });
  };

  render() {
    const { selectedDinosaur, park } = this.state;
    const species = this.state.species.map((dinosaur) => {
      return (
        <DinosaurCard
          key={dinosaur.id}
          dinosaur={dinosaur}
          handleDinosaurClick={this.handleDinosaurClick}
        />
      );
    });

    return (
      <div className="app" id="app-container">
        <h1>Triassic Park</h1>
        <SelectedDino dino={selectedDinosaur} />
        {selectedDinosaur.name && (
          <button onClick={this.addDino}>Add To Park</button>
        )}
        <div id="dinosaur-list-container">{species}</div>
        {park.length > 0 && <Park dinos={park} />}
        <NewSpeciesForm clickHandler={this.addSpecies} />
      </div>
    );
  }
}

export default App;