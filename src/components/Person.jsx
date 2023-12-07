import Name from "./Name";

const Person = (props) => {
  console.log(props);
  return (
    <div>
      <Name name={props.name} />
      <img src={props.img} alt="cat" />
      <p>Color:{props.color}</p>
    </div>
  );
};

export default Person;
