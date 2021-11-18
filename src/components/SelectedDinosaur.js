// Every dinosaur eats either 1 tree or 1 goat (depending on its diet) PLUS 1 tree/goat for every 5 tons it weighs
// examples:
//
// 1. Allosaur weighs 2 tons. It eats 1 goat.
// 2. Triceratops weighs 9 tons. It eats two trees a day.
// 3. Mosasaur weighs 15 tons. It eats 4 goats a day.
const SelectedDino = (props) => {
  const { image, name, weight, carnivore } = props.dino;
  const foodCost = Math.floor(weight / 5) + 1;

  const getFoodText = (foodCost, carnivore) => {
    const baseWord = carnivore ? "goat" : "tree";
    const wordEnding = foodCost === 1 ? "" : "s";

    return foodCost + " " + baseWord + wordEnding;
  };

  return (
    <div className="selected-dino">
      <h3>Currently Selected Dinosaur</h3>
      <img className="dino-image" src={image} alt="Selected dinosaur" />
      <p>{name || "No Dinosaur Selected"}</p>
      {name && <p>Eats: {getFoodText(foodCost, carnivore)}</p>}
    </div>
  );
};

export default SelectedDino;
// if (name) {
  //   // (!props.dino.name) OR (props.dino.carnivore === undefined)
  //   let foodParagraph =
  //     <p>Eats: {carnivore ? `${foodCost} goats` : `${foodCost} trees`}</p>
  // }
