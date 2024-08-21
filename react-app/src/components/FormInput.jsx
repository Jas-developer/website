import { useState, useContext } from "react";

export const UserContext = useContext();

function FormInput() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: Number,
    address: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    const person = event.target.value;
    setUser((prevPerson) => ({ ...prevPerson, person }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsers((prevUsers) => ({ ...prevUsers, user }));
  };

  return (
    <UserContext.Provider value={users}>
      <div>
        <form>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          <label>lastname:</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          <label>age:</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
          <label type="text" name="address">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    </UserContext.Provider>
  );
}

export default FormInput;
