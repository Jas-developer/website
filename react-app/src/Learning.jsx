export default function Learning() {
  const fruits = [{ name: "apple" }, { name: "banana" }, { name: "orage" }];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit.name}</p>
      ))}
    </div>
  );
}
