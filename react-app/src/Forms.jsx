import { useState } from "react";

function MyForm() {
  const [name, setName] = useState({}); // this will recieve  a string value

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setName((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`The name you entered was: ${name}`);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default MyForm;
