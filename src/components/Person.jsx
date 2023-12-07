import Name from "./Name";

const Person = ({ name, img, color = "grey" }) => {
  return (
    <div>
      <Name name={name} />
      <img src={img} alt="cat" />
      <p>Color:{color}</p>
    </div>
  );
};

export default Person;
