import { Component } from "react";

class Park extends Component {
  constructor() {
    super();
    this.state = {
      treeCount: 0,
      goatCount: 0,
    };
  }

  addTree = () => {
    this.setState({ treeCount: this.state.treeCount + 1 });
  };

  addGoat = () => {
    this.setState({ goatCount: this.state.goatCount + 1 });
  };

  nextDay = (goatCost, treeCost) => {
    this.setState({
      goatCount: this.state.goatCount - goatCost,
      treeCount: this.state.treeCount - treeCost,
    });
  };

  render() {
    let goatCost = 0;
    let treeCost = 0;
    this.props.dinos.forEach((dino) => {
      // CARNIVORE IS A BOOLEAN VALUE ALREADY IN ARRAY
      if (dino.carnivore) {
        goatCost += Math.floor(dino.weight / 5 + 1);
      } else {
        treeCost += Math.floor(dino.weight / 5 + 1);
      }
    });
    // METHOD TO KEEP TRACK OF WHAT AND HOW MANY SPECIES IN ARRAY

    const dinoCounts = [];
    this.props.dinos.forEach((dino) => {
      const species = dinoCounts.find((species) => species.name === dino.name);
      if (species) {
        species.count++;
      } else {
        dinoCounts.push({ name: dino.name, count: 1 });
      }
    });

    return (
      <div>
        <h1>Your Park</h1>
        <div className="inventory">
          <h3>Inventory</h3>
          <p>
            {this.state.treeCount} trees, {this.state.goatCount} goats
          </p>
          <button className="add-tree" onClick={this.addTree}>
            Add Tree
          </button>
          <button className="add-goat" onClick={this.addGoat}>
            Add Goat
          </button>
        </div>

        <div className="cost">
          <h3>Food Per Day:</h3>
          <p>
            {goatCost} goats, {treeCost} trees
          </p>
          <button
            className="next-day"
            onClick={() => this.nextDay(goatCost, treeCost)}
          >
            Next Day
          </button>
        </div>

        <div className="dinosaurs">
          <h3>Dinosaurs:</h3>
          <div>
            {dinoCounts.map((species) => (
              <p key={species.name}>
                {species.name}: x{species.count}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Park;
// METHOD TO KEEP TRACK OF WHAT AND HOW MANY SPECIES IN ARRAY
// CARNIVORE IS A BOOLEAN VALUE ALREADY IN ARRAY
