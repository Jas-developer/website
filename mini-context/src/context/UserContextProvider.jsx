import React, { useEffect, useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    userId: Number,
    age: Number,
    role: "",
  });
  const [comments, setComments] = useState({
    userId: Number,
    content: "",
    date: Date,
  });

  const [users, setUsers] = useState([]);

  const states = { user, setUser, comments, setComments, users, setUsers };

  return <UserContext.Provider value={states}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
