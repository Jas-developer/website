export default function Learning() {
  const fruits = [{ name: "apple" }, { name: "banana" }, { name: "orage" }];

  // learning destructioring in react/js

  const calculate = (a, b) => {
    // this is a function array
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  };

  const [add, subtract, multiply, divide] = calculate(2, 3);

  // Destructuring an objects

  const Vehicle = {
    brand: "Ford",
    model: "Mustang",
    type: "Car",
    year: 2021,
    color: "red",
  };

  //creating a function that will handle the object array
  const myVehicle = ({ type, color, brand, model }) => {
    return [type, color, brand, model];
  };

  // using thee function
  const [type, color, brand, model] = myVehicle(Vehicle);

  // deeply neested object

  // spread operator allow us to copy the content of an array or object
  // example
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const combinedArray = [...array1, ...array2];
  console.log(combinedArray);

  // copying the content of an array
  const V = {
    brand: "Ford",
    model: "Mustang",
    color: "Red",
  };

  const U = {
    type: "car",
    year: 2021,
    color: "Yellow",
  };

  console.log({ ...V, ...U }); // if it is object you need to encapsulate it with an object as welll

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit.name}</p>
      ))}
      <h2>RESULT OF A DESTRUCTIORING A FUNCTION ARRAY</h2>
      <p>
        {add} - {subtract} - {multiply} - {divide}
      </p>
      <br />
      <p>
        {type} - {color} - {brand} - {model}
      </p>
    </div>
  );
}
