import { Component } from "react";

class NewSpeciesForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      weight: "",
      image: "",
      diet: "herbivore",
    };
  }

  handleChangeWeight = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, weight, image, diet } = this.state;
    const carnivore = diet === "carnivore";
    const newSpecies = {
      name: name,
      weight: weight,
      image: image,
      carnivore: carnivore,
    };

    this.props.clickHandler(newSpecies);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor="weight">Weight</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={this.state.weight}
          onChange={this.handleChange}
        />

        <label htmlFor="image">Image</label>
        <input
          type="textarea"
          id="image"
          name="image"
          value={this.state.image}
          onChange={this.handleChange}
        />

        <input
          type="radio"
          id="herbivore"
          name="diet"
          value="herbivore"
          onChange={this.handleChange}
          checked
        />
        <label htmlFor="herbivore">Herbivore</label>

        <input
          type="radio"
          id="carnivore"
          name="diet"
          value="carnivore"
          onChange={this.handleChange}
        />
        <label htmlFor="carnivore">Carnivore</label>

        <button>Submit</button>
      </form>
    );
  }
}

export default NewSpeciesForm;