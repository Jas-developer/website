export default function Learning() {
  const fruits = [{ name: "apple" }, { name: "banana" }, { name: "orage" }];

  // learning destructioring in react/js

  const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
  };

  const [add, subtract, multiply, divide] = calculate(2, 3);

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit.name}</p>
      ))}
    </div>
  );
}
