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

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit.name}</p>
      ))}
      <h2>RESULT OF A DESTRUCTIORING A FUNCTION ARRAY</h2>
      <p>
        {add} - {subtract} - {multiply} - {divide}
      </p>
    </div>
  );
}
