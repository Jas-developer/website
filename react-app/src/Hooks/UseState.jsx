import { useState } from "react";

import { memo } from "react";

function FormInput() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    const fname = event.target.value;
    const info = event.target.name;

    setName((prevName) => ({ ...prevName, [info]: fname }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNames((pname) => [...pname, { name }]);
    setName({ firstName: "", lastName: "" });
    console.log(names);
    alert("hdsjhasd");
  };

  return (
    <section>
      <h1>
        Hello - {name.firstName} - {name.lastName}
      </h1>
      <h1>Please enter your name</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>firstName:</label>
          <input
            name="firstName"
            type="text"
            value={name.firstName}
            onChange={handleChange}
          />
          <label>lastName:</label>
          <input
            type="text"
            name="lastName"
            value={name.lastName}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
      <p>All names</p>
    </section>
  );
}

export default memo(FormInput);
